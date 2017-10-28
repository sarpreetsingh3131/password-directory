import React from 'react'

export class Passwords extends React.Component {
  constructor () {
    super()
    this.state = {
      passwords: window.localStorage.getItem('passwords') === null ? [] : JSON.parse(window.localStorage.getItem('passwords')),
      focus: false
    }
  }

  addPassword (event) {
    let arr = this.state.passwords
    arr.push({ website: '', username: '', password: '', dots: '' })
    this.setState({ passwords: arr, focus: true })
  }

  editPassword (event) {
    event.target.setAttribute('contentEditable', 'true')
    event.target.focus()
  }

  showPassword (event) { event.target.textContent = this.state.passwords[event.target.id].password }

  deletePassword (event) {
    let arr = this.state.passwords
    arr.splice(event.target.id, 1)
    this.setState({ password: arr })
    window.localStorage.setItem('passwords', JSON.stringify(arr))
  }

  search (event) {
    let arr = []
    JSON.parse(window.localStorage.getItem('passwords')).forEach(password => {
      if (password.website.startsWith(event.target.value) || password.username.startsWith(event.target.value)) { arr.push(password) }
    })
    this.setState({ passwords: arr === [] ? JSON.parse(window.localStorage.getItem('passwords')) : arr })
  }

  handlePasswords (event) {
    let arr = this.state.passwords
    switch (event.target.title) {
      case 'website': arr[event.target.id].website = event.target.textContent
        break
      case 'username': arr[event.target.id].username = event.target.textContent
        break
      case 'password': arr[event.target.id].password = event.target.textContent
        arr[event.target.id].dots = ''
        for (let i = 0; i < event.target.textContent.length; i++) { arr[event.target.id].dots += '•' }
        event.target.textContent = arr[event.target.id].dots
    }
    this.setState({ passwords: arr, focus: false })
    window.localStorage.setItem('passwords', JSON.stringify(arr))
  }

  componentDidUpdate () { if (this.state.focus) { document.querySelector('tbody').lastElementChild.firstElementChild.click() } }

  render () {
    return (
      <div className='pane'>
        <header className='toolbar toolbar-header'>
          <div className='toolbar-actions'>
            <input id='search' className='form-control' type='text' placeholder='Search Passwords...' onChange={this.search.bind(this)} />
          </div>
        </header>
        <table className='table-striped'>
          <thead>
            <tr>
              <th><strong>Website</strong></th>
              <th><strong>Username</strong></th>
              <th><strong>Password</strong></th>
              <th><span className='icon icon-plus' onClick={this.addPassword.bind(this)} /></th>
            </tr>
          </thead>
          <tbody>
            {this.state.passwords.map((password, index) =>
              <tr key={index}>
                <td id={index} title='website' onClick={this.editPassword.bind(this)} onBlur={this.handlePasswords.bind(this)}>{password.website}</td>
                <td id={index} title='username' onClick={this.editPassword.bind(this)} onBlur={this.handlePasswords.bind(this)}>{password.username}</td>
                <td id={index} title='password' onFocus={this.showPassword.bind(this)} onClick={this.editPassword.bind(this)} onBlur={this.handlePasswords.bind(this)}>{password.dots}</td>
                <td><span className='icon icon-cancel' id={index} onClick={this.deletePassword.bind(this)} /></td>
              </tr>)}
          </tbody>
        </table>
      </div>
    )
  }
}
