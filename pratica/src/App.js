import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: '',
      email: '',
      senha: '',
      mensagem: '',
      contador: ''
    }
 
    this.cadastrar = this.cadastrar.bind(this)
  }
  
  mensagem() {
    this.setState({mensagem: 'Cadastro efetuado com sucesso!'})
  }

  clear

  clearMessage() {
    this.setState({mensagem: ''})
  }

  cadastrar(event) {
    // alert('Teste!')
    const {nome, email, senha} = this.state // Desconstruir
   
    if(nome !== '' && email !== '' && senha !== '') {
      alert(`Nome: ${nome} \nE-mail: ${email} \nSenha: ${senha}`)
      this.setState({nome: '', email: '', senha: '', error: ''})
      this.mensagem()
      
    } else {
      this.setState({error: 'Ops! Parece que está faltando algo!'})
    }
    
    setTimeout(
      function(clearMessage) {
          this.setState({ mensagem: '' });
      }
      .bind(this),
      5000
  );
    event.preventDefault()
  }
 
  render() {
    return(
      <div>
        <h1>Novo usuário</h1>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.cadastrar}>
          <label>Nome:</label>
          <input type="text" value={this.state.nome} onChange={(e) => this.setState({nome: e.target.value})}></input><br/>
          <label>E-mail:</label>
          <input type="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}></input><br/>
          <label>Senha:</label>
          <input type="password" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})}></input><br/><br/>
         
          <button type='submit'>Cadastrar</button>
        </form>

        <p>{this.state.mensagem}</p>
      </div>
    )
  }
}

export default App