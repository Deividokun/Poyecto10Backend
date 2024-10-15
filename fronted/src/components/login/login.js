import { Header } from '../../cabecero/header'
import { Mangas } from '../Mangas/manga'
import './login.css'

export const login = () => {
  const main = document.querySelector('main')
  main.innerHTML = ''

  const loginDiv = document.createElement('div')
  loginDiv.className = 'login-container'

  const form = document.createElement('form')
  form.className = 'login-form'

  const inputUser = document.createElement('input')
  inputUser.type = 'text'
  inputUser.placeholder = 'Nombre de usuario'
  inputUser.className = 'input-field'

  const inputPassword = document.createElement('input')
  inputPassword.type = 'password'
  inputPassword.placeholder = 'Contraseña'
  inputPassword.className = 'input-field'

  const boton = document.createElement('button')
  boton.textContent = 'Acceder'
  boton.className = 'login-btn'

  form.append(inputUser, inputPassword, boton)

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    submit(inputUser.value, inputPassword.value, form)
  })

  loginDiv.append(form)
  main.append(loginDiv)
}

const submit = async (userName, password, form) => {
  const objetoFinal = JSON.stringify({ userName, password })

  const opciones = {
    method: 'POST',
    body: objetoFinal,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const res = await fetch('http://localhost:3000/api/v1/user/login', opciones)

  if (res.status === 400) {
    const pError = document.createElement('p')
    pError.classList.add('error')
    pError.textContent = 'Usuario o contraseña incorrectos'
    form.append(pError)
    return
  }

  const respuestaFinal = await res.json()

  localStorage.setItem('token', respuestaFinal.token)
  localStorage.setItem('user', JSON.stringify(respuestaFinal.user))

  Mangas()
  Header()
}
