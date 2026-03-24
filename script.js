document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault(); // evita que se recargue la página

  // agarramos el contenido del textarea
  const mensaje = e.target.mensaje.value;

  try {
    const response = await fetch("/api/enviar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ mensaje })
    });

    if (response.ok) {
      alert("Denuncia enviada correctamente");
      e.target.reset(); // limpia el formulario
    } else {
      alert("Error al enviar");
    }
  } catch (error) {
    alert("Error de conexión");
  }
});