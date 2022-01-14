import './App.css';

const Saudacao = (props) => {
  return (
    <div>
      <h2>Olá! tudo bem, {props.nome}</h2>
      <p>Seja bem-vindo(a) ao curso de {props.curso}</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <p>Curso React</p>
      <Saudacao nome="Leandro" curso="React Js"/>
      <Saudacao nome="Lorena" curso="React Js"/>
    </div>
  )
}

export default App;
