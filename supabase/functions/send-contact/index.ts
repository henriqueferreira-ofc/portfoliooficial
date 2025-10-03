import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const RESEND_FROM_EMAIL = Deno.env.get("RESEND_FROM_EMAIL");
const CONTACT_RECIPIENT_EMAIL = Deno.env.get("CONTACT_RECIPIENT_EMAIL");

if (!RESEND_API_KEY || !RESEND_FROM_EMAIL || !CONTACT_RECIPIENT_EMAIL) {
  console.error(
    "Missing required environment variables: RESEND_API_KEY, RESEND_FROM_EMAIL, CONTACT_RECIPIENT_EMAIL"
  );
}

const respond = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "content-type, authorization",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
    },
  });

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return respond(200, { ok: true });
  }

  if (req.method !== "POST") {
    return respond(405, { error: "Method not allowed" });
  }

  if (!RESEND_API_KEY || !RESEND_FROM_EMAIL || !CONTACT_RECIPIENT_EMAIL) {
    return respond(500, {
      error: "Email service not configured. Contact the administrator.",
    });
  }

  let payload: ContactPayload;

  try {
    payload = await req.json();
  } catch (error) {
    console.error("Invalid JSON payload", error);
    return respond(400, { error: "Invalid JSON payload" });
  }

  const { name, email, subject, message } = payload;

  if (!name || !email || !subject || !message) {
    return respond(400, { error: "Missing required fields" });
  }

  const clean = (value: string) => value.trim();
  const trimmedName = clean(name);
  const trimmedEmail = clean(email).toLowerCase();
  const trimmedSubject = clean(subject);
  const trimmedMessage = clean(message);

  const emailBodyText = `Nova mensagem recebida pelo formulário de contato:\n\nNome: ${trimmedName}\nE-mail: ${trimmedEmail}\nAssunto: ${trimmedSubject}\n\nMensagem:\n${trimmedMessage}`;

  const emailBodyHtml = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
      <h2 style="margin-bottom: 16px;">Nova mensagem recebida</h2>
      <p><strong>Nome:</strong> ${trimmedName}</p>
      <p><strong>E-mail:</strong> ${trimmedEmail}</p>
      <p><strong>Assunto:</strong> ${trimmedSubject}</p>
      <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />
      <p style="white-space: pre-line;">${trimmedMessage}</p>
    </div>
  `;

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: RESEND_FROM_EMAIL,
        to: [CONTACT_RECIPIENT_EMAIL],
        reply_to: trimmedEmail,
        subject: `Nova mensagem de ${trimmedName}: ${trimmedSubject}`,
        html: emailBodyHtml,
        text: emailBodyText,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error("Resend API error", errorText);
      return respond(502, {
        error: "Failed to send email via Resend",
        details: errorText,
      });
    }

    const resendData = await resendResponse.json();
    return respond(200, { message: "Mensagem enviada com sucesso", data: resendData });
  } catch (error) {
    console.error("Unexpected error sending email", error);
    return respond(500, {
      error: "Unexpected error sending email",
      details: error instanceof Error ? error.message : error,
    });
  }
});
