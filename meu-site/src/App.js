import './App.css';

const Time = (props) => {
  return (
    <div>
      <Sobre username={props.nome} cargo={props.cargo}
             idade={props.idade}/>
      <Social fb={props.facebook}/>
      <hr></hr>
    </div>
  )
}

const Sobre = (props) => {
  return (
    <div>
      <h2>Olá! Eu sou o(a) {props.username}</h2>
      <p>Cargo: {props.cargo}</p>
      <p>Idade: {props.idade}</p>
    </div>
  )
}

const Social = (props) => {
  return (
    <div>
      <a href={props.fb}>Facebook </a>
      <a>Twitter</a>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Conheça o nosso time:</h1>
      <Time nome="Leandro" cargo="Programador" idade="29" facebook="https://facebook.com"/>
      <Time nome="José" cargo="Cozinheiro" idade="35" facebook="https://facebook.com"/>
    </div> 
  )
}

export default App;
