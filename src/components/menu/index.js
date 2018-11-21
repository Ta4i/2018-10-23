import React, { Component } from 'react'
import MenuItem from './menu-item'
import InterComment from '../../contexts/inter'

class Menu extends Component {
  render() {
    return (
      <InterComment.Consumer>
        {({ mainMenu }) => (
          <div>
            <h2>{mainMenu}</h2>
            {this.props.children}
          </div>
        )}
      </InterComment.Consumer>
    )
  }
}

export default Menu
export { MenuItem }
