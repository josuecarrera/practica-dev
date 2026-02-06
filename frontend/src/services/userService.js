// Este archivo se encarga SOLO de hablar con el Backend
const API_URL = process.env.REACT_APP_API_URL;

export const registrarUsuario = async (datosUsuario) => {
  try {
    const response = await fetch(`${API_URL}/api/usuarios`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datosUsuario),
    });

    if (!response.ok) {
      throw new Error('Error en la petición al servidor');
    }

    return await response.json();
  } catch (error) {
    console.error("Error en el servicio:", error);
    throw error;
  }
};