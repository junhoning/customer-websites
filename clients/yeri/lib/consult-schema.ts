import { z } from "zod";
import { SERVICE_IDS } from "@/content/services";

/* 상담 신청 검증 규칙 — 클라이언트 폼과 API 라우트가 공유하는 단일 소스 */
export const consultSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "이름을 2자 이상 입력해 주세요.")
    .max(40, "이름이 너무 깁니다."),
  phone: z
    .string()
    .trim()
    .regex(/^0\d{1,2}-?\d{3,4}-?\d{4}$/, "올바른 연락처를 입력해 주세요."),
  email: z
    .email("올바른 이메일을 입력해 주세요.")
    .or(z.literal(""))
    .optional(),
  service: z.enum(SERVICE_IDS, { message: "상담 분야를 선택해 주세요." }),
  message: z
    .string()
    .trim()
    .min(5, "문의 내용을 5자 이상 입력해 주세요.")
    .max(2000, "문의 내용이 너무 깁니다."),
  privacy: z.literal(true, { message: "개인정보 수집에 동의해 주세요." }),
});

export type ConsultInput = z.infer<typeof consultSchema>;

/* safeParse 실패 결과를 필드별 첫 에러 메시지 맵으로 변환 */
export function toFieldErrors(error: z.ZodError): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const issue of error.issues) {
    const field = String(issue.path[0] ?? "");
    if (field && !errors[field]) errors[field] = issue.message;
  }
  return errors;
}
