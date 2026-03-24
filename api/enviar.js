export default async function handler(req, res) {
  if (req.method === "POST") {
    const { mensaje } = req.body;

    console.log("Denuncia recibida:", mensaje);

    return res.status(200).json({ ok: true });
  }

  return res.status(405).json({ error: "Método no permitido" });
}
