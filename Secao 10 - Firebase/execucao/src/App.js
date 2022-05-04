import { useState } from 'react'
import firebase from "./firebaseConnection";

function App() {
  const [carro, setCarro] = useState('')
  const [montadora, setMontadora] = useState('')

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

  return (
    <div className="App">
      <h1>Reactjs e Firebase</h1>

      <label>Carro: </label>
      <input type="text" value={carro} onChange={(e) => setCarro(e.target.value)} />

      <label>Montadora: </label>
      <input type="text" value={montadora} onChange={(e) => setMontadora(e.target.value)} />
      <br></br><br></br>
      <button onClick={handleAdd}>Cadastrar</button>
      <button onClick={buscaCarro}>Buscar carro</button>
    </div>
  );
}

export default App;
