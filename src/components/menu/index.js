import React, { Component } from 'react'
import MenuItem from './menu-item'
import { Consumer as LangConsumer } from '../../contexts/lang'

class Menu extends Component {
  render() {
    return (
      <div>
        <LangConsumer>{(value) => <h2>{value.mainMenuName}</h2>}</LangConsumer>
        {this.props.children}
      </div>
    )
  }
}

export default Menu
export { MenuItem }
