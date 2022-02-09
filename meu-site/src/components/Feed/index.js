import React, {Component} from "react"

class Feed extends Component {
    render() {
        return (
            <div key={this.props.id}>
                <h3>{this.props.username}</h3>
                <a>{this.props.curtidas > 1 ? this.props.curtidas + ' curtidas' : this.props.curtidas + ' curtida'}</a> |
                <a> {this.props.comentarios > 1 ? this.props.comentarios + ' comentários' : ' '}</a>
                <hr></hr>
            </div>
        )
    }
}

export default Feed