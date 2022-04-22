import React from 'react'
import ListaPost from '../components/ListaPost'
import ListCategorias from '../components/ListCategorias'

const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
   
    <ListCategorias />
    <ListaPost url={'/posts'} />
    
    </main>
  )
}

export default Home
