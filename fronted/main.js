import { Header } from './src/cabecero/header'
import { Mangas } from './src/components/Mangas/manga'
import './style.css'

const Main = () => {
  const app = document.querySelector('#app')

  app.innerHTML = `
      <header></header>
      <main></main>
    `
}

Main()
Header()
Mangas()
