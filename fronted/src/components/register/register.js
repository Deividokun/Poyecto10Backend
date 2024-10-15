import { Header } from '../../cabecero/header'
import { Mangas } from '../Mangas/manga'
import './register.css'

export const register = () => {
  const main = document.querySelector('main')
  main.innerHTML = ''

  const registerDiv = document.createElement('div')
  registerDiv.className = 'register-container'
  Register(registerDiv)

  main.append(registerDiv)
}

const Register = (elementoPadre) => {
  const form = document.createElement('form')
  form.className = 'form'

  const title = document.createElement('h2')
  title.className = 'title'
  title.innerHTML = 'Register <span>now!</span>'

  const inputUN = document.createElement('input')
  const inputPass = document.createElement('input')
  const inputConfirmPass = document.createElement('input')
  const button = document.createElement('button')

  inputUN.className = 'input'
  inputPass.className = 'input'
  inputConfirmPass.className = 'input'
  button.className = 'button-confirm'

  inputUN.placeholder = 'User Name'
  inputPass.placeholder = 'Password'
  inputConfirmPass.placeholder = 'Confirm Password'
  inputPass.type = 'password'
  inputConfirmPass.type = 'password'
  button.textContent = 'Register'

  form.append(title, inputUN, inputPass, inputConfirmPass, button)
  elementoPadre.append(form)

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    submit(inputUN.value, inputPass.value, inputConfirmPass.value, form)
  })
}

const submit = async (userName, password, confirmPassword, form) => {
  const pErrorPrevio = document.querySelector('.error')
  if (pErrorPrevio) {
    pErrorPrevio.remove()
  }

  if (password !== confirmPassword) {
    const pError = document.createElement('p')
    pError.classList.add('error')
    pError.textContent = 'Las contraseñas no coinciden'
    form.append(pError)
    return
  }

  const objetoFinal = JSON.stringify({ userName, password })

  const opciones = {
    method: 'POST',
    body: objetoFinal,
    headers: { 'Content-Type': 'application/json' }
  }

  try {
    const res = await fetch(
      'http://localhost:3000/api/v1/user/register',
      opciones
    )

    if (res.status === 400) {
      const pError = document.createElement('p')
      pError.classList.add('error')
      pError.textContent = 'Error al registrar. Verifique sus datos.'
      form.append(pError)
      return
    }

    const respuestaFinal = await res.json()
    localStorage.setItem('token', respuestaFinal.token)
    localStorage.setItem('user', JSON.stringify(respuestaFinal.user))

    Mangas()
    Header()
  } catch (error) {
    const pError = document.createElement('p')
    pError.classList.add('error')
    pError.textContent = 'Hubo un problema con el servidor.'
    form.append(pError)
  }
}
