import React, {Component} from 'react'
import Feed from './components/Feed'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: 'teste@teste@gmail',
      senha: '123',
      sexo: 'masculino'
    }

    this.trocaEmail = this.trocaEmail.bind(this)
    this.trocaSexo = this.trocaSexo.bind(this)
  }

  trocaEmail(e) {
    this.setState({email: e.target.value})
  }

  trocaSexo(e) {
    let valorInformado = e.target.value
    this.setState({sexo: valorInformado})
  }
  
  render() {
    return(
      <div>
        E-mail:
        <input type="email" name="email" value={this.state.email} onChange={this.trocaEmail}></input><br></br>
        Senha:
        <input type="text" name="senha" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})}></input><br></br>
        Sexo:
        <select value={this.state.sexo} onChange={this.trocaSexo}>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>
      
        <div>
          <h3>{this.state.email}</h3>
          <h3>{this.state.senha}</h3>
          <h3>{this.state.sexo}</h3>
        </div>
      </div>


    )
  }
}

export default App