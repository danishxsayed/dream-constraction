import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";

type EnquiryData = {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  message?: string;
};

export const sendEnquiry = createServerFn({ method: "POST" })
  .validator((data: EnquiryData) => data)
  .handler(async ({ data }) => {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "Dream Palace Constructions <noreply@dreampalaceconstructions.com>",
      to: ["info@dreampalaceconstructions.com"],
      subject: `New Enquiry from ${data.name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f9f9;">
          <h2 style="color: #1a1a1a; margin-bottom: 24px;">New Enquiry — Dream Palace Constructions</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #555; width: 140px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #555;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">${data.phone}</td>
            </tr>
            ${data.email ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">${data.email}</td>
            </tr>` : ""}
            ${data.service ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #555;">Service</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">${data.service}</td>
            </tr>` : ""}
            ${data.message ? `<tr>
              <td style="padding: 10px 0; font-weight: bold; color: #555; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; white-space: pre-wrap;">${data.message}</td>
            </tr>` : ""}
          </table>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      throw new Error("Failed to send email");
    }

    return { success: true };
  });
