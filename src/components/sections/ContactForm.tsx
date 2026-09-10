import { useState, type FormEvent } from "react";
import { services } from "@/lib/site-data";

const fieldClass =
  "w-full border-0 border-b border-hairline bg-transparent py-4 text-base outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-bronze";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="border-t border-hairline py-16">
        <p className="eyebrow text-[10px] text-bronze">Enquiry received</p>
        <h3 className="mt-6 display-md">Thank you.</h3>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
          Your enquiry has been noted. Our team will get back to you within one business day.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="eyebrow mt-10 border-b border-ink/25 pb-2 text-[10px] transition-colors hover:border-bronze hover:text-bronze"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-10">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="eyebrow text-[9px] text-muted-foreground">
            Full Name *
          </label>
          <input id="name" name="name" required autoComplete="name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="phone" className="eyebrow text-[9px] text-muted-foreground">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="eyebrow text-[9px] text-muted-foreground">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="service" className="eyebrow text-[9px] text-muted-foreground">
            Service of Interest
          </label>
          <select id="service" name="service" className={fieldClass} defaultValue="">
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="eyebrow text-[9px] text-muted-foreground">
          Message
        </label>
        <textarea id="message" name="message" rows={4} className={`${fieldClass} resize-none`} />
      </div>

      <button
        type="submit"
        data-cursor="OPEN →"
        className="eyebrow bg-ink px-10 py-5 text-[10px] text-ivory transition-colors hover:bg-bronze hover:text-ink"
      >
        Send Enquiry →
      </button>
    </form>
  );
}
