import React, { useEffect, useState } from 'react'
import './style.css'
import logo from './logo.svg';

// https://sujeitoprogramador.com/rn-api/?api=posts

function App() {
  const [nutri, setNutri] = useState([])

  useEffect(() => {
    
    function loadApi() {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
      
      fetch(url)
      .then((result) => result.json())
      .then((json) => {
        console.log(json)
        setNutri(json)
      })
    }

    loadApi()
  }, [])
  
  return (
    <div className='container'>
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item) => {
        return(
          <article key={item.id} className='post'>
            <strong className='titulo'>{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className='capa'/>
            <p className='subtitulo'>
              {item.subtitulo}
            </p>
            <a className='botao'>Acessar</a>
          </article>
        )
      })}
    </div>
  );
}

export default App;