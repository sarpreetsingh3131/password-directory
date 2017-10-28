import React from 'react'

export class Sidebar extends React.Component {
  render () {
    return (
      <div className='pane-sm sidebar'>
        <nav className='nav-group'>
          <h5 className='nav-group-title'>Menu</h5>
          <span id='passwords' className={this.props.isMainView ? 'nav-group-item active' : 'nav-group-item'} onClick={this.props.handleView}>
            <span id='passwords' className='icon icon-lock' />Passwords
          </span>
          <span id='settings' className={this.props.isMainView ? 'nav-group-item' : 'nav-group-item active'} onClick={this.props.handleView}>
            <span id='settings' className='icon icon-tools' />Settings
          </span>
        </nav>
      </div>
    )
  }
}
