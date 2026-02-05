import React, { useState } from 'react';

function FormularioUsuario() {
  // 1. Cambiamos el estado de email a apellido
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Usamos la variable de entorno
    const API_URL = process.env.REACT_APP_API_URL;

    try {
      const response = await fetch(`${API_URL}/api/usuarios`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // 2. Enviamos nombre y apellido en el JSON
        body: JSON.stringify({ nombre, apellido }), 
      });

      const data = await response.json();
      
      if (response.ok) {
        alert(data.mensaje || "Usuario guardado exitosamente");
      } else {
        alert("Error del servidor: " + (data.mensaje || response.statusText));
      }

    } catch (error) {
      console.error("Error conectando al backend:", error);
      alert("Error al guardar");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Nombre" 
        value={nombre}
        onChange={(e) => setNombre(e.target.value)} 
        required
      />
      
      {/* 3. Cambiamos el input de Email por el de Apellido */}
      <input 
        type="text" 
        placeholder="Apellido" 
        value={apellido}
        onChange={(e) => setApellido(e.target.value)} 
        required
      />
      
      <button type="submit">Guardar</button>
    </form>
  );
}

export default FormularioUsuario;