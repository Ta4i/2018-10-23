import React, { Component } from 'react'
import MenuItem from './menu-item'

class Menu extends Component {
  render() {
    return (
      <div>
        <h2>Main menu</h2>
        {this.props.children}
      </div>
    )
  }
}

export default Menu
export { MenuItem }
