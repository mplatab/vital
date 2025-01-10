import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.json();
    // Agregar timestamp y página
    const timestamp = new Date().toLocaleString("es-EC", {
      timeZone: "America/Guayaquil",
    });
    const data = {
      ...formData,
      timestamp,
      landingPage: "main",
    };

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxZLzsQOGr4ttwshKPjkp3LUkj5RYLaRdJIOGItirYjetBtN-3in3FFN__2WeMb73B7wg/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Error en la respuesta");
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Error desconocido";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
