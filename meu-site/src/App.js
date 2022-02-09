import React, {Component} from 'react'
import Feed from './components/Feed'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      feed: [
        {id: 1, username: 'Leandro', curtidas: 10, comentarios: 30},
        {id: 2, username: 'Larissa', curtidas: 50, comentarios: 120},
        {id: 3, username: 'Roberta', curtidas: 110, comentarios: 230},
        {id: 4, username: 'José', curtidas: 1, comentarios: 0}
      ]
    }
  }
  
  render() {
    return(
      <div>
        {this.state.feed.map((item) => {
          return(
            <Feed key={item.id} username={item.username}
                  curtidas={item.curtidas} comentarios={item.comentarios}/>
          )
        })}
      </div>
    )
  }
}

export default App