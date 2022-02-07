import React, {Component} from 'react'
import Membro from './components/Membro' // Não precisa informar index.js

class App extends Component {
  render() {
    return(
      <div>
        <Membro nome="Visitante"/>
      </div>
    )
  }
}

export default App