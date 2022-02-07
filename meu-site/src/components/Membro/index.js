import React, {Component} from 'react'

class Membro extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: props.nome,
            nome2: props.nome2
        }

        this.entrar = this.entrar.bind(this)
    }

    entrar() {
        // alert('Clicou')
        this.setState({nome: 'Leandro'})
    }

    entrar2() {
        this.setState({nome: 'Aline'})
    }
    
    render() {
        return(
            <div>
                <h2>Bem-vindo(a) {this.state.nome}</h2>
                <button onClick={this.entrar}>
                    Entrar como Leandro
                </button>
                <button onClick={() => this.setState({nome: ''})}>
                    Sair
                </button>

                <h2>Bem-vindo(a) {this.state.nome2}</h2>
                <button onClick={() => this.entrar2('Aline')}>
                    Entrar como Aline
                </button>

                <button onClick={() => this.setState({nome: ''})}>
                    Sair
                </button>
            </div>
        )
    }
}

export default Membro