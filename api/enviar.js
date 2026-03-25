import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { mensaje } = req.body;

    try {
      const data = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "INTEGRIDAD@IRAM.ORG.AR",
        subject: "Nueva denuncia recibida",
        html: `<p>${mensaje}</p>`
      });

      return res.status(200).json({ ok: true, data });

    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error enviando mail" });
    }
  }

  return res.status(405).end();
}
