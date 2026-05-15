// data/db.js
// Aquí podrías configurar una base de datos real como MongoDB o MySQL
// Para este ejemplo de marketing, usaremos un almacenamiento temporal o mock

const db = {
  mensajes: [],
  saveMessage: (data) => {
    db.mensajes.push({ ...data, date: new Date() });
    console.log('Nuevo mensaje de contacto:', data);
    return true;
  }
};

module.exports = db;
