import { createAPIFileRoute } from "@tanstack/react-start/api";
import { Resend } from "resend";

export const APIRoute = createAPIFileRoute("/api/contact")({
  POST: async ({ request }) => {
    const body = await request.json();
    const { name, phone, email, service, message } = body;

    if (!name || !phone) {
      return new Response(JSON.stringify({ error: "Name and phone are required." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "Dream Palace Constructions <noreply@dreampalaceconstructions.com>",
      to: ["info@dreampalaceconstructions.com"],
      subject: `New Enquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f9f9;">
          <h2 style="color: #1a1a1a; margin-bottom: 24px;">New Enquiry — Dream Palace Constructions</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #555; width: 140px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #555;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">${phone}</td>
            </tr>
            ${email ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">${email}</td>
            </tr>` : ""}
            ${service ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #555;">Service</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">${service}</td>
            </tr>` : ""}
            ${message ? `<tr>
              <td style="padding: 10px 0; font-weight: bold; color: #555; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; white-space: pre-wrap;">${message}</td>
            </tr>` : ""}
          </table>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return new Response(JSON.stringify({ error: "Failed to send email." }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  },
});
