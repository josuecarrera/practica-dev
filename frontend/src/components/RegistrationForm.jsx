import React, { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  // State is now in English (formData)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobilePhone: "",
    country: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data ready to submit:", formData);
    alert("Form submitted successfully!");
    // Backend logic will go here later
  };

  return (
    <div className="form-container">
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Ej. Juan"
            required
          />
        </div>

        {/* Last Name */}
        <div className="form-group">
          <label>Apellido:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Ej. Pérez"
            required
          />
        </div>

        {/* Mobile Phone */}
        <div className="form-group">
          <label>Celular:</label>
          <input
            type="tel"
            name="mobilePhone"
            value={formData.mobilePhone}
            onChange={handleChange}
            placeholder="+593 999 999 999"
            required
          />
        </div>

        {/* Country */}
        <div className="form-group">
          <label>País:</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona un país</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Mexico">México</option>
            <option value="Colombia">Colombia</option>
            <option value="Argentina">Argentina</option>
            <option value="Spain">España</option>
          </select>
        </div>

        {/* Gender (Radio Buttons) */}
        <div className="form-group">
          <label>Sexo:</label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
              />
              Hombre
            </label>

            <label className="radio-label">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
              />
              Mujer
            </label>
          </div>
        </div>

        {/* Future Photo Upload */}
        <div className="form-group future-upload">
          <label>Foto de Perfil (Próximamente):</label>
          <div className="upload-placeholder">
            📁 Carga de archivos habilitada en la próxima versión
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Guardar Información
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
