import React, {Component} from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: 'Leandro',
      contador: 0
    }
    this.aumentar = this.aumentar.bind(this)
    this.diminuir = this.diminuir.bind(this)
  }

  aumentar() {
    let state = this.state
    state.contador += 1
    state.nome = 'Roberta'
    this.setState(state)
  }

  diminuir() {
    let state = this.state
    if(state.contador === 0) {
      alert('Chegou a zero!')
    }
    state.contador -= 1
    this.setState(state)
  }

  render() {
    return(
      <div>
        {this.state.nome}
        <h1>Contador</h1>
        <h2>
          <button onClick={this.diminuir}>-</button>
            {this.state.contador}
          <button onClick={this.aumentar}>+</button>
        </h2>
      </div>
    )
  }
}

export default App