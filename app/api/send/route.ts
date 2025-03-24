import { Resend } from "resend";

import EmailTemplate from "@/components/email-template";

const resend = new Resend("re_KkXBPnq9_CYRYZ8XTGZSsSnyb845fnNZ9");

export async function POST(req: Request) {
  const emailData = await req.json();
  const { data, error } = await resend.emails.send({
    from: "From My Portfolio <contact@ricklionelonana.me>",
    to: ["oricklionel@gmail.com"],
    subject: emailData["subject"],
    react: EmailTemplate(emailData),
  });

  if (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 400,
      statusText: "Internal Server Error",
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
