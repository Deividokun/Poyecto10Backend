const mongoose = require('mongoose')

const libroSchema = new mongoose.Schema(
  {
    imagenPortada: { type: String, required: true },
    autor: { type: String, required: false },
    titulo: { type: String, required: true },
    precio: { type: Number, required: true },
    valoracion: { type: Number, required: true }
  },
  {
    timestamps: true,
    collection: 'libros'
  }
)

const Libro = mongoose.model('libros', libroSchema, 'libros')
module.exports = Libro
