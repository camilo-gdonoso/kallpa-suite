const express = require('express');
const router = express.Router();
const db = require('../data/db');

// POST /api/contacto
router.post('/contacto', (req, res) => {
  const { nombre, email, mensaje } = req.body;
  
  if (!nombre || !email) {
    return res.status(400).send('Nombre y email son requeridos');
  }

  db.saveMessage({ nombre, email, mensaje });
  
  // En un caso real, aquí enviarías un email con nodemailer
  
  res.render('pages/gracias', {
    title: '¡Gracias por contactarnos!',
    page: 'contacto',
    nombre
  });
});

module.exports = router;
