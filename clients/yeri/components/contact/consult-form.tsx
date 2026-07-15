"use client";

import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/common/button";
import { Card } from "@/components/common/card";
import Field, { TextInput, TextArea, Select } from "@/components/contact/field";
import { consultSchema, toFieldErrors } from "@/lib/consult-schema";
import { CONSULT_FORM } from "@/content/contact";
import { SERVICES } from "@/content/services";
import { PRIVACY_LINK } from "@/content/nav";

/* 폼 상태와 제출 흐름(idle→submitting→success/error) — 검증 규칙은 lib/consult-schema가 소유 */

type Status = "idle" | "submitting" | "success" | "error";

const EMPTY = { name: "", phone: "", email: "", service: "", message: "", privacy: false };

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const PrivacyRow = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.muted};

  input {
    margin-top: 0.25rem;
  }

  a {
    font-weight: 600;
    color: ${({ theme }) => theme.color.primary};
    text-decoration: underline;
  }
`;

const FormError = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.danger};
`;

const SuccessCard = styled(Card)`
  text-align: center;
  padding: 3rem 2rem;

  svg {
    color: ${({ theme }) => theme.color.primary};
  }

  h3 {
    margin-top: 0.875rem;
    font-size: ${({ theme }) => theme.fontSize.lg};
    color: ${({ theme }) => theme.color.primaryStrong};
  }

  p {
    margin-top: 0.5rem;
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.color.muted};
  }

  button {
    margin-top: 1.5rem;
  }
`;

export default function ConsultForm() {
  const [values, setValues] = useState<Record<string, string | boolean>>(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = (field: string, value: string | boolean) =>
    setValues((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});

    const parsed = consultSchema.safeParse(values);
    if (!parsed.success) {
      setErrors(toFieldErrors(parsed.error));
      setStatus("idle");
      return;
    }

    try {
      const res = await fetch("/api/consult", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("요청 처리에 실패했습니다.");
      setStatus("success");
      setValues(EMPTY);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <SuccessCard>
        <CheckCircle2 size={40} strokeWidth={1.5} aria-hidden />
        <h3>{CONSULT_FORM.success.title}</h3>
        <p>{CONSULT_FORM.success.description}</p>
        <Button type="button" $variant="outline" onClick={() => setStatus("idle")}>
          {CONSULT_FORM.success.againLabel}
        </Button>
      </SuccessCard>
    );
  }

  const f = CONSULT_FORM.fields;

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <Field label={f.name.label} htmlFor="name" required error={errors.name}>
        <TextInput id="name" type="text" placeholder={f.name.placeholder} $error={!!errors.name}
          value={values.name as string} onChange={(e) => set("name", e.target.value)} />
      </Field>

      <Field label={f.phone.label} htmlFor="phone" required error={errors.phone}>
        <TextInput id="phone" type="tel" placeholder={f.phone.placeholder} $error={!!errors.phone}
          value={values.phone as string} onChange={(e) => set("phone", e.target.value)} />
      </Field>

      <Field label={f.email.label} htmlFor="email" error={errors.email}>
        <TextInput id="email" type="email" placeholder={f.email.placeholder} $error={!!errors.email}
          value={values.email as string} onChange={(e) => set("email", e.target.value)} />
      </Field>

      <Field label={f.service.label} htmlFor="service" required error={errors.service}>
        <Select id="service" $error={!!errors.service} value={values.service as string}
          onChange={(e) => set("service", e.target.value)}>
          <option value="" disabled>{f.service.placeholder}</option>
          {SERVICES.map((s) => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </Select>
      </Field>

      <Field label={f.message.label} htmlFor="message" required error={errors.message}>
        <TextArea id="message" placeholder={f.message.placeholder} $error={!!errors.message}
          value={values.message as string} onChange={(e) => set("message", e.target.value)} />
      </Field>

      <div>
        <PrivacyRow>
          <input type="checkbox" checked={values.privacy as boolean}
            onChange={(e) => set("privacy", e.target.checked)} />
          <span>
            <Link href={PRIVACY_LINK.href}>{CONSULT_FORM.privacy.linkLabel}</Link>
            {CONSULT_FORM.privacy.after}
          </span>
        </PrivacyRow>
        {errors.privacy && <FormError role="alert">{errors.privacy}</FormError>}
      </div>

      {status === "error" && <FormError role="alert">{CONSULT_FORM.errorMessage}</FormError>}

      <Button type="submit" $variant="primary" $size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? CONSULT_FORM.submittingLabel : CONSULT_FORM.submitLabel}
      </Button>
    </Form>
  );
}
