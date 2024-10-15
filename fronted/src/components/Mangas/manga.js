import './manga.css'

export const Mangas = async () => {
  const main = document.querySelector('main')
  main.innerHTML = ''

  const token = localStorage.getItem('token')
  const headers = token ? { Authorization: `Bearer ${token}` } : {}

  try {
    const res = await fetch('http://localhost:3000/api/v1/libro/', { headers })

    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`)
    }

    const contentType = res.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('La respuesta no es un JSON válido')
    }

    const libros = await res.json()
    printMangas(libros, main)
  } catch (error) {
    console.error('Error al obtener los mangas:', error.message)
    main.innerHTML = `<p>Error al cargar los mangas: ${error.message}</p>`
  }
}

export const printMangas = (libros, elementoPadre) => {
  const divLibros = document.createElement('div')
  divLibros.className = 'libros'

  for (const libro of libros) {
    const divLibro = document.createElement('div')
    const titulo = document.createElement('h3')
    const imagenPortada = document.createElement('img')
    const info = document.createElement('div')

    const like = document.createElement('img')
    like.className = 'like'

    like.addEventListener('click', () => addFavorito(libro._id))

    const user = JSON.parse(localStorage.getItem('user'))

    if (user?.favoritos?.includes(libro._id)) {
      like.src =
        'https://cdn.pixabay.com/photo/2020/09/30/07/48/heart-5614865_640.png'
    } else {
      like.src =
        'https://cdn.pixabay.com/photo/2020/09/30/07/48/heart-5614865_640.png'
    }

    divLibro.className = 'libro'
    titulo.textContent = libro.titulo
    imagenPortada.src = libro.imagenPortada

    info.innerHTML = `
            <p>${libro.autor}</p>   
            <p>${libro.precio}€</p>
        `

    divLibro.append(titulo, imagenPortada, info, like)
    divLibros.append(divLibro)
  }

  elementoPadre.append(divLibros)
}

const addFavorito = async (idLibro) => {
  const user = JSON.parse(localStorage.getItem('user'))

  user.favoritos = [...user.favoritos, idLibro]

  const objetoFinal = JSON.stringify({
    favoritos: [idLibro]
  })

  const opciones = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    body: objetoFinal
  }

  const res = await fetch(
    `http://localhost:3000/api/v1/user/${user._id}`,
    opciones
  )

  localStorage.setItem('user', JSON.stringify(user))
  Mangas()
}
