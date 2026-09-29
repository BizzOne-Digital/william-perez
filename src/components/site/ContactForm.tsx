import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { submitContact } from "@/lib/contact.functions";

type Errors = Partial<Record<"name" | "email" | "message", string>>;
type Status = "idle" | "submitting" | "success" | "error";

const field =
  "w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-gold focus:outline-none";

export function ContactForm() {
  const send = useServerFn(submitContact);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const fd = new FormData(form);
    const values = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      subject: String(fd.get("subject") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
      website: String(fd.get("website") ?? ""),
    };

    const next: Errors = {};
    if (values.name.length < 2) next.name = "Please enter your name.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email))
      next.email = "Please enter a valid email address.";
    if (values.message.length < 10) next.message = "Please write at least 10 characters.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("submitting");
    try {
      await send({ data: values });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-gold/40 bg-card p-8 text-center card-lift"
      >
        <CheckCircle2 className="mx-auto h-9 w-9 text-gold" aria-hidden />
        <h3 className="mt-4 text-xl text-navy">Message sent</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you for reaching out. The campaign will get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="eyebrow mt-6 text-navy underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name <span className="text-gold">*</span>
          </label>
          <input
            id="name"
            name="name"
            className={field}
            placeholder="Your full name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-destructive">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email <span className="text-gold">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={field}
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-destructive">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" className={field} placeholder="Optional" />
        </div>
        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-medium">
            Subject
          </label>
          <input id="subject" name="subject" className={field} placeholder="Optional" />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message <span className="text-gold">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className={field}
          placeholder="How can the campaign help?"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      {status === "error" && (
        <p role="alert" className="flex items-center gap-2 text-sm text-destructive">
          <AlertCircle className="h-4 w-4" aria-hidden />
          Something went wrong. Please try again or email the campaign directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-navy-deep disabled:opacity-70"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
