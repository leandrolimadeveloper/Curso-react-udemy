import { useState, useEffect } from 'react'
import firebase from "./firebaseConnection";

function App() {
  const [carroId, setCarroId] = useState('')
  const [carro, setCarro] = useState('')
  const [montadora, setMontadora] = useState('')
  const [carros, setCarros] = useState([])

  useEffect(() => {
    async function loadCarros() {
      firebase.firestore().collection('carros')
        .onSnapshot((doc) => {
          let meusCarros = [];

          doc.forEach((item) => {
            meusCarros.push({
              id: item.id,
              modelo: item.data().modelo,
              montadora: item.data().montadora
            });
          });

          setCarros(meusCarros);
        })
    }

    loadCarros()
  })

  async function handleAdd() {
    await firebase.firestore().collection('carros')
      .add({
        modelo: carro,
        montadora: montadora
      })
      .then(() => {
        console.log('Dados cadastrado com sucesso!')
        setCarro('')
        setMontadora('')
      })
      .catch((error) => {
        console.log('Erro: ' + error)
      })
  }

  async function buscaCarro() {
    await firebase.firestore().collection('carros')
      .doc('23')
      .get()
      .then((snapshot) => {
        setCarro(snapshot.data().modelo)
        setMontadora(snapshot.data().montadora)
      })
      .catch((err) => {
        console.log('Erro: ' + err)
      })
  }

  async function mostraCarro() {
    await firebase.firestore().collection('carros')
      .get()
      .then((snapshot) => {
        let lista = []

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            modelo: doc.data().modelo,
            montadora: doc.data().montadora
          })
        })

        setCarros(lista)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  async function editarCarro() {
    await firebase.firestore().collection('carros')
    .doc(carroId)
    .update({
      modelo: carro,
      montadora: montadora  
    })
    .then(() => {
      alert('Dado atualizado!')
      console.log('Dado atualizado!')
      // Limpar campo
      setCarroId('')
      setCarro('')
      setMontadora('')
    })
    .catch(err => {console.log(err)})
  }

  return (
    <div className="App">
      <h1>Reactjs e Firebase</h1>

      <label>Pesquisar carro: </label>
      <input type="text" value={carroId} onChange={ (e) => setCarroId(e.target.value)} placeholder="ID" />

      <label>Carro: </label>
      <input type="text" value={carro} onChange={(e) => setCarro(e.target.value)} />

      <label>Montadora: </label>
      <input type="text" value={montadora} onChange={(e) => setMontadora(e.target.value)} />
      <br></br><br></br>

      <button onClick={handleAdd}>Cadastrar</button>
      <button onClick={buscaCarro}>Buscar carro</button>
      <button onClick={mostraCarro}>Mostrar carros cadastrados</button>
      <button onClick={editarCarro}>Editar</button>

      <ul>
        {carros.map((carro) => {
          return (
            <li key={carro.id}>
              <span>ID: {carro.id}</span><br></br>
              <span>Carro: {carro.modelo} </span><br></br>
              <span>Montadora: {carro.montadora} </span><br></br><br></br>
            </li>
          )
        })}
      </ul>

    </div>
  );
}

export default App;
