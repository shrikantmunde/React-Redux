import React, { Component, PropTypes } from 'react'

class App extends Component {
  static propTypes = {
    names: PropTypes.array,
    onAddName: PropTypes.func,
    onRemoveName: PropTypes.func,
    onCopy: PropTypes.func
  }

  state = {
    newName: ''
  }

  onChangeName = (event) => {
    this.setState({ newName: event.target.value })
  }

  onAddName = () => {
    this.props.onAddName(this.state.newName)
    this.setState({ newName: '' })
  }

  render() {
    return (
      <div>
        <h1>Names</h1>
        <ul>
          {
            this.props.names.map((name, index) => {
              const onClick = () => {
                this.props.onRemoveName(index)
              }

              return (
                <li key={index}>
                  <a href="#" onClick={onClick}>{name}</a>
                </li>
              )
            })
          }
        </ul>

        <input onChange={this.onChangeName} value={this.state.newName} />
        <button onClick={this.onAddName}>Add name</button>
        <button onClick={this.props.onCopy}>Copy names</button>
      </div>
    )
  }
}

export default App
