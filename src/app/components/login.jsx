import React from 'react'

export class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isError: false,
      credentials: window.localStorage.getItem('credentials') === null ? '' : JSON.parse(window.localStorage.getItem('credentials'))
    }
    this.props.handleLogIn(this.state.credentials === '')
  }

  login (event) {
    if (event.key === 'Enter') {
      this.props.handleLogIn(event.target.value === this.state.credentials)
      this.setState({ isError: event.target.value !== this.state.credentials })
    } else if (this.state.isError) { this.setState({ isError: false }) }
  }

  render () {
    return (
      <div id='login-background' className='window'>
        <div id='login-content' className='content'>
          <input type='password' className='form-control' placeholder='Password' onKeyDown={this.login.bind(this)} />
          {this.state.isError ? <h5>Invalid password.</h5> : ''}
        </div>
      </div>
    )
  }
}
