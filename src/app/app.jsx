import React from 'react'
import { render } from 'react-dom'
import { Login } from './components/login.jsx'
import { Settings } from './components/settings.jsx'
import { Passwords } from './components/passwords.jsx'
import { Sidebar } from './components/sidebar.jsx'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      isLoggedIn: false,
      isMainView: true
    }
  }

  handleView (event) { this.setState({ isMainView: event.target.id === 'passwords' }) }

  handleLogIn (isLoggedIn) { this.setState({ isLoggedIn: isLoggedIn }) }

  render () {
    return (
      <div>
        {this.state.isLoggedIn
              ? <div className='window'>
                <div className='window-content'>
                  <div className='pane-group'>
                    <Sidebar handleView={this.handleView.bind(this)} isMainView={this.state.isMainView} />
                    {this.state.isMainView ? <Passwords /> : <Settings />}
                  </div>
                </div>
              </div>
          : <Login handleLogIn={this.handleLogIn.bind(this)} /> }
      </div>
    )
  }
}
render(<App />, document.querySelector('#app'))
