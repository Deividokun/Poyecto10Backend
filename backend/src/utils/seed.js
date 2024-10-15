const Mangas = require('../api/models/libro')
const anime = require('../../src/data/manga')
const mongoose = require('mongoose')

mongoose
  .connect(
    'mongodb+srv://davitarm123:KaAhSbr2wzBsXHD0@cluster0.bidbk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(async () => {
    // Buscamos todas las películas de nuestra colección
    const allAnime = await Mangas.find()
    // Si existen películas previamente, dropearemos la colección
    if (allAnime.length) {
      await Mangas.collection.drop() //La función drop borra la colección
    }
  })
  .catch((err) => console.log(`error fatal: ${err}`))
  .then(async () => {
    await Mangas.insertMany(anime)
  })
  .catch((err) => console.log(`Error creating data: ${err}`))

  .finally(() => mongoose.disconnect())
