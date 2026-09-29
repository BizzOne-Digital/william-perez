import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Please enter a valid email address").max(160),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  subject: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(2000),
  // Honeypot: must stay empty.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.website) {
      return { ok: true as const };
    }
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
    if (!SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
      console.error("[contact] SMTP is not configured (SMTP_USER / SMTP_PASS / CONTACT_TO)");
      throw new Error("Email service unavailable");
    }

    const { createTransport } = await import("nodemailer");
    const port = Number(SMTP_PORT || 465);
    const transport = createTransport({
      host: SMTP_HOST || "smtp.gmail.com",
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    try {
      const info = await transport.sendMail({
        from: `"Website Contact Form" <${SMTP_USER}>`,
        to: CONTACT_TO,
        replyTo: `"${data.name.replace(/"/g, "")}" <${data.email}>`,
        subject: `Website contact: ${data.subject || "New message"} (from ${data.name})`,
        text: [
          `Name: ${data.name}`,
          `Email: ${data.email}`,
          `Phone: ${data.phone || "(none)"}`,
          `Subject: ${data.subject || "(none)"}`,
          "",
          data.message,
        ].join("\n"),
      });
      console.log("[contact] SUCCESS email sent", {
        messageId: info.messageId,
        response: info.response,
        subject: data.subject || "(none)",
      });
    } catch (err) {
      const e = err as { code?: string; responseCode?: number; message?: string };
      console.error("[contact] FAILED to send email", {
        code: e.code,
        responseCode: e.responseCode,
        message: e.message,
      });
      throw new Error("Email send failed");
    }
    return { ok: true as const };
  });
