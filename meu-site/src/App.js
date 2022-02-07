import React, {Component} from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: 1,
      mensagem: true,
      logado: false 
    }

    this.sair = this.sair.bind(this)
    this.entrar = this.entrar.bind(this)
  }

  sair() {
    this.setState({logado: false})
  }

  entrar() {
    this.setState({logado: true})
  }
  
  render() {
    return(
      <div>
        {this.state.status === 1 &&
          <h1>Bem-vindo(a) ao sistema</h1>
        }

        {this.state.mensagem ? 
        <div>
          <h2>Receba seu prêmio</h2>
        </div> : 
        <div>
          <h2>Nenhum prêmio disponível no momento</h2>
        </div>
        }

        
        {this.state.logado ? 
        <div>
          <button onClick={this.sair}>Sair do sistema</button>
        </div> : 
        <div>
          <button onClick={this.entrar}>Entrar no sistema</button>
        </div>
        }
        
        <div>
          <h2>Curso React JS</h2>
        </div>
      </div>
    )
  }
}

export default App