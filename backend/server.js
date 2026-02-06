const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const helmet = require('helmet');
const app = express();

app.use(express.json());
app.use(cors());


// 1. Configuración de la Base de Datos
// Usamos los nombres de servicio de Docker o localhost si estás probando local
const db = mysql.createPool({
  host: process.env.DB_HOST || 'mysql_db', // Nombre del servicio en docker-compose
  user: 'appuser',
  password: 'AppPass123!', // REEMPLAZA CON TU PASSWORD DEL DOCKER-COMPOSE
  database: 'appdb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// 2. CAMBIO IMPORTANTE: Usamos POST, no GET
app.post('/api/usuarios', (req, res) => {
  const { nombre, apellido, email } = req.body;

  console.log("Recibido:", nombre, apellido, email);

  // Validación básica
  if (!nombre || !email) {
    return res.status(400).json({ mensaje: "Faltan datos obligatorios" });
  }

  const sql = 'INSERT INTO usuarios (nombre, apellido, email) VALUES (?, ?, ?)';

  db.query(sql, [nombre, apellido, email], (err, result) => {
    if (err) {
      console.error("Error SQL:", err);
      return res.status(500).json({ error: "Error al guardar en base de datos" });
    }
    res.json({ mensaje: "Usuario guardado exitosamente", id: result.insertId });
  });
});

app.listen(4000, () => console.log('Backend corriendo en puerto 4000 🚀'));
