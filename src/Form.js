import React, { PropTypes } from 'react';

/*function Form({ username, password, onChangeName, onChangePassword }) {
  return (
    <form>
      <input placeholder="Username" value={username} onChange={onChangeName} /><br />
      <input type="password" placeholder="Password" value={password} onChange={onChangePassword} /><br />
      <button type="submit">Submit</button>
    </form>
  );
}*/

class Form extends React.Component {
  onSubmit = (event) => {
    const { username, password, onLogin, onAddName } = this.props
    event.preventDefault()//This is to avoid default click events or on chage events of html tags so that we can customize the events 
    onAddName(username)
    onLogin(username, password)
  }

  render() {
    const { username, password, onChangeName, onChangePassword, isLoggingIn, error, response } = this.props

    return (
      <form onSubmit={this.onSubmit}>
        <input placeholder="Username" value={username} onChange={onChangeName} /><br />
        <input type="password" placeholder="Password" value={password} onChange={onChangePassword} /><br />
        <button type="submit">Submit</button>
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

        {isLoggingIn && <p>Logging in...</p>}
        {error && <p>{error}</p>}
        {Object.keys(response).length > 0 && <p>{JSON.stringify(response)}</p>}
      </form>
    );
  }
}

Form.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  onChangeName: PropTypes.func,
  onChangePassword: PropTypes.func,
  isLoggingIn: PropTypes.bool,
  response: PropTypes.object,
  error: PropTypes.string,
  onLogin: PropTypes.func
}

export default Form
