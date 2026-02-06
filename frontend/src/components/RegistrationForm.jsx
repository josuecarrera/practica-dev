import React, { useState } from 'react';
import { registrarUsuario } from '../services/userService'; // <--- Importamos el servicio

function FormularioUsuario() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState(''); // Agregamos email

  const handleSubmit = async (e) => {
    e.preventDefault();

    const datos = { nombre, apellido, email };

    try {
      // Usamos el servicio en lugar del fetch directo
      const respuesta = await registrarUsuario(datos);
      alert('Éxito: ' + respuesta.mensaje);
    } catch (error) {
      alert('Error al guardar el usuario');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" placeholder="Nombre" 
        onChange={(e) => setNombre(e.target.value)} 
      />
      <input 
        type="text" placeholder="Apellido" 
        onChange={(e) => setApellido(e.target.value)} 
      />
      <input 
        type="email" placeholder="Email" 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <button type="submit">Guardar</button>
    </form>
  );
}

export default FormularioUsuario;