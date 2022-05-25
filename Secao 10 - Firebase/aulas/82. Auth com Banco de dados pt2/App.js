import { useState } from 'react'
import firebase from "./firebaseConnection";

function App() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')

  const [user, setUser] = useState({})

  async function cadastrar() {
    await firebase.auth().createUserWithEmailAndPassword(email, senha)
      .then( async (value) => {
        await firebase.firestore().collection('users')
        .doc(value.user.uid)
        .set({
          nome: nome,
          cargo: cargo,
          status: true
        })
        .then(() => {
          setNome('')
          setCargo('')
          setEmail('')
          setSenha('')
        })
        .catch(error => {console.log(error)})
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          alert('E-mail já existente')
        } else if (error.code === 'auth/weak-password') {
          alert('Senha muito fraca')
        }
      })
  }

  async function fazerLogin() {
    await firebase.auth().signInWithEmailAndPassword(email, senha)
    .then(async (value) => {
      setEmail('')
      setSenha('')
      
      await firebase.firestore().collection('users')
      .doc(value.user.uid)
      .get()
      .then((snapshot) => {
        setUser({
          nome: snapshot.data().nome,
          cargo: snapshot.data().cargo,
          status: snapshot.data().status,
          email: value.user.email
        })
      })
    })
  }

  async function fazerLogout() {
    await firebase.auth().signOut()
    setUser({})
  }

  return (
    <div className="App">
      <h1>Reactjs e Firebase</h1>
      
      <h2>Cadastrar</h2>
      <label>Nome</label>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/> <br></br><br></br>

      <label>Cargo</label>
      <input type="text" value={cargo} onChange={(e) => setCargo(e.target.value)} /> <br></br><br></br>

      
      <label>E-mail:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /> <br></br><br></br>

      <label>Senha</label>
      <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} /> <br></br><br></br>
      <br></br>


      <button onClick={cadastrar}>Cadastrar</button> <br></br><br></br>
      <button onClick={fazerLogin}>Fazer login</button> <br></br><br></br>
      <button onClick={fazerLogout}>Logout</button> 
      
      
      <hr></hr>

      {Object.keys(user).length > 0 && (
        <div>
          <strong>Olá</strong>, {user.nome}<br></br>
          <strong>Cargo:</strong> {user.cargo}<br></br>
          <strong>Email:</strong> {user.email}<br></br>
          <strong>Status:</strong> {user.status ? 'Ativo' : 'Desativado'}<br></br>
          <strong>Status:</strong> {String(user.status)}<br></br>
        </div>
      )}
    </div>
  );
}

export default App;
