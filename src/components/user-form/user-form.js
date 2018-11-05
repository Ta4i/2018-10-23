import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsername } from '../../ac'

class UserForm extends Component {
  render() {
    const { username } = this.props

    return (
      <form>
        Username:
        <input value={username} onChange={this.handleUserNameInput} />
        <p>You Username is: {username}</p>
      </form>
    )
  }

  handleUserNameInput = (event) => {
    this.props.dispatchUsername(event.target.value)
  }
}

const mapStateToProps = (store) => ({
  username: store.username
})

const mapDispatchToProps = {
  dispatchUsername: getUsername
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm)
