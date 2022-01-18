import React, { Component } from 'react'

class Equipe extends Component {
  render() {
    return(
      <div>
        <Sobre nome={this.props.nome} profissao={this.props.profissao}/>
        <Social />
        <hr></hr>
      </div>
      
    )
  }
}

class Sobre extends Component {
  render() {
    return(
      <div>
        <h2>Olá! Sou o(a) {this.props.nome}</h2>
        <h3>Profissão: {this.props.profissao}</h3>
      </div>
    )
  }
}

const Social = (props) => {
  return (
    <div>
      <a>Linkedin</a>
      <a>Facebook</a>
    </div>
  );
}

function App() {
  return(
    <div>
      <h1>Conheça a nossa equipe:</h1>
      <Equipe nome="Leandro" profissao="programador"/>
      <Equipe nome="Larissa" profissao="Arquiteta"/>
    </div>
  )
}

export default App;
