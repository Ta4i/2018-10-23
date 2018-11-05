import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import * as consts from '../../constants'

class SelectFilter extends Component {
  render() {
    return (
      <Select
        options={this.optionsForSelect}
        onChange={this.handleSelectChange}
        value={this.props.selectedOption}
        isMulti
      />
    )
  }

  get optionsForSelect() {
    return this.props.articles.map((item) => ({
      value: item.id,
      label: item.title
    }))
  }

  handleSelectChange = (selectedOption) => {
    this.props.dispatch({
      type: consts.SELECT_FILTER,
      payload: selectedOption
    })
  }
}

const mapStateToProps = (store) => ({
  articles: store.articles,
  selectedOption: store.articlesSelected
})

export default connect(mapStateToProps)(SelectFilter)
