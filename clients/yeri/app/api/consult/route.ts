import { NextResponse } from "next/server";
import { consultSchema } from "@/lib/consult-schema";

/* 상담 신청 접수 — 요청 검증 + 전달. 검증 규칙은 lib/consult-schema가 소유 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "요청 형식이 올바르지 않습니다." },
      { status: 400 },
    );
  }

  const parsed = consultSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "입력값이 올바르지 않습니다." },
      { status: 400 },
    );
  }

  // TODO: 수신 방식 확정 후 연동 (이메일 발송 / 슬랙 알림 / DB 저장 중 택1 — 기획서 10장)
  console.log("[상담 신청 접수]", parsed.data);

  return NextResponse.json({ ok: true });
}
