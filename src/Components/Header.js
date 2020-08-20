import React, { Component } from 'react'

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }
  render() {
    return (
      <div className="main-header">
        <nav className="header-navigation">Home</nav>
      </div>
    )
  }
}

export default Header;