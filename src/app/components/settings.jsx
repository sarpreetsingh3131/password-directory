import React from 'react'

export class Settings extends React.Component {
  constructor () {
    super()
    this.state = {
      credentials: window.localStorage.getItem('credentials') === null ? '' : JSON.parse(window.localStorage.getItem('credentials')),
      isDots: true
    }
  }

  handlePassword (event) {
    this.setState({ credentials: ('' + event.target.value).trim() })
    window.localStorage.setItem('credentials', JSON.stringify(('' + event.target.value).trim()))
  }

  handleDots () { this.setState({ isDots: !this.state.isDots }) }

  deletePassword () {
    window.localStorage.setItem('credentials', JSON.stringify(''))
    this.setState({ credentials: '' })
  }

  render () {
    return (
      <div id='login-background' className='pane'>
        <div id='login-content'>
          <label>Set a password to lock this app</label>
          <input type={this.state.isDots ? 'password' : 'text'} className='form-control' onFocus={this.handleDots.bind(this)} onBlur={this.handleDots.bind(this)} value={this.state.credentials} onChange={this.handlePassword.bind(this)} placeholder='Password' />
          <br /> <br />
          <div className='btn-group'>
            <button className={this.state.credentials === '' ? 'btn btn-large btn-default' : 'active btn btn-large btn-default'}>Password on</button>
            <button className={this.state.credentials === '' ? 'active btn btn-large btn-default' : 'btn btn-large btn-default'} onClick={this.deletePassword.bind(this)}>Password off</button>
          </div>
        </div>
      </div>
    )
  }
}
