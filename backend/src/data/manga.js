const mangas = [
  {
    titulo: 'One Piece',
    precio: 20,
    imagenPortada:
      'https://m.media-amazon.com/images/I/91NxYvUNf6L._AC_UF894,1000_QL80_.jpg',
    valoracion: 5,
    autor: 'Toei Animation'
  },
  {
    titulo: 'Attack on Titan',
    precio: 25,
    imagenPortada:
      'https://m.media-amazon.com/images/I/71oYp0Y7bxL._AC_UF894,1000_QL80_.jpg',
    valoracion: 4,
    autor: 'Wit Studio'
  },
  {
    titulo: 'My Hero Academia',
    precio: 18,
    imagenPortada:
      'https://m.media-amazon.com/images/I/912mJf7tsUL._AC_UF894,1000_QL80_.jpg',
    valoracion: 5,
    autor: 'Bones'
  },
  {
    titulo: 'Demon Slayer',
    precio: 22,
    imagenPortada:
      'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/765ee047befcfb677d169f5de4c82d5c.jpg',
    valoracion: 5,
    autor: 'Ufotable'
  },
  {
    titulo: 'Jujutsu Kaisen',
    precio: 23,
    imagenPortada:
      'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/e4e80c83c792d81c138e320874dbdffc.jpe',
    valoracion: 5,
    autor: 'MAPPA'
  },
  {
    titulo: 'Fullmetal Alchemist: Brotherhood',
    precio: 30,
    imagenPortada:
      'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/0662921aa3b81ff85737ddeb56deefab.jpg',
    valoracion: 5,
    autor: 'Bones'
  },
  {
    titulo: 'Tokyo Ghoul',
    precio: 20,
    imagenPortada:
      'https://m.media-amazon.com/images/I/71Kbwi4dAeL._AC_UF894,1000_QL80_.jpg',
    valoracion: 4,
    autor: 'Studio Pierrot'
  },
  {
    titulo: 'Death Note',
    precio: 15,
    imagenPortada:
      'https://www.ecartelera.com/carteles-series/400/452/001_m.jpg',
    valoracion: 5,
    autor: 'Madhouse'
  },
  {
    titulo: 'Sword Art Online',
    precio: 17,
    imagenPortada:
      'https://es.web.img3.acsta.net/pictures/19/07/09/11/04/5921608.jpg',
    valoracion: 4,
    autor: 'A-1 Pictures'
  },
  {
    titulo: 'Hunter x Hunter',
    precio: 28,
    imagenPortada:
      'https://cdn.kobo.com/book-images/04b14d62-82ff-448d-bb0e-a169036271ae/1200/1200/False/hunter-x-hunter-vol-3.jpg',
    valoracion: 5,
    autor: 'Madhouse'
  },
  {
    titulo: 'Bleach',
    precio: 19,
    imagenPortada:
      'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/52edb7a843abacb4ff0f642c8eda1440.jpg',
    valoracion: 4,
    autor: 'Studio Pierrot'
  },
  {
    titulo: 'Fairy Tail',
    precio: 18,
    imagenPortada:
      'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/18638d44e180fd1b51870106b88e46e4.jpg',
    valoracion: 4,
    autor: 'A-1 Pictures'
  },
  {
    titulo: 'Black Clover',
    precio: 21,
    imagenPortada:
      'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/e108ae17d8d0407417cac40eb52d849a.jpg',
    valoracion: 5,
    autor: 'Studio Pierrot'
  },
  {
    titulo: 'Sword of the Stranger',
    precio: 25,
    imagenPortada:
      'https://m.media-amazon.com/images/M/MV5BZDUxNGFlYTgtMjNhZC00NDNmLTkyYmUtNzNhYzJmOTE1NjZhXkEyXkFqcGc@._V1_.jpg',
    valoracion: 5,
    autor: 'Bones'
  },
  {
    titulo: 'Mob Psycho 100',
    precio: 19,
    imagenPortada:
      'https://es.web.img2.acsta.net/pictures/20/11/12/14/25/3371142.jpg',
    valoracion: 5,
    autor: 'Bones'
  },
  {
    titulo: 'Vinland Saga',
    precio: 26,
    imagenPortada:
      'https://m.media-amazon.com/images/I/91+Qs9DaFZL._AC_UF894,1000_QL80_.jpg',
    valoracion: 5,
    autor: 'Wit Studio'
  },
  {
    titulo: 'Neon Genesis Evangelion',
    precio: 30,
    imagenPortada:
      'https://i.ebayimg.com/images/g/R5wAAOSwcjdfjW4j/s-l1200.jpg',
    valoracion: 5,
    autor: 'Gainax'
  },
  {
    titulo: 'Gintama',
    precio: 17,
    imagenPortada:
      'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    valoracion: 5,
    autor: 'Sunrise'
  },
  {
    titulo: 'Fate/Stay Night',
    precio: 24,
    imagenPortada:
      'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/fd6f801d77097e20eb5ffb9232de14d0.jpg',
    valoracion: 4,
    autor: 'Ufotable'
  },
  {
    titulo: 'Re:Zero',
    precio: 22,
    imagenPortada:
      'https://somoskudasai.com/wp-content/uploads/2024/09/rezerokv3-scaled.jpg',
    valoracion: 5,
    autor: 'White Fox'
  }
]

module.exports = mangas
