import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import { setFilter } from '../../ac'

class SelectFilter extends Component {
  static defaultProps = {
    articles: []
  }
  render() {
    return (
      <Select
        options={this.optionsForSelect}
        onChange={this.handleSelectChange}
        value={this.props.titles}
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

  handleSelectChange = (selectedOptions) => {
    const { setFilter } = this.props
    const ids = selectedOptions.map(({ value }) => value)
    setFilter({ ids })
  }
}

const mapStateToProps = (store) => ({
  articles: store.articles,
  filter: store.filter
})

const mapDispatchToProps = {
  setFilter
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectFilter)
