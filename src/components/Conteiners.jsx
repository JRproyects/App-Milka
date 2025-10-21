import React from 'react'
import '../App.css' // Importa los estilos

const Containers = () => {
  return (
    <div className='container'>
      <header className='app-header'>
        <h1 className='h1-principal'>App Milka</h1>
      </header>
      <div className='btn-container'>
        <button>
          <h2>Contenedores</h2>
          <p>Este es el componente Containers funcionando correctamente.</p>
        </button>
      </div>
    </div>
  )
}

export default Containers
