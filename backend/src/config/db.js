const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('conectado a la BBDD')
  } catch (error) {
    console.log('error en la conexión de la BBDD')
  }
}

module.exports = { connectDB }
