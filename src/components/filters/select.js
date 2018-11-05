import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { filterArticle } from '../../ac'

class SelectFilter extends Component {
  render() {
    return (
      <Select
        options={this.optionsForSelect}
        onChange={this.handleSelectChange}
        value={this.props.articleForFilter}
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
    this.props.filterArticle(selectedOption)
  }
}

const mapStateToProps = (store) => ({
  articles: store.articles,
  articleForFilter: store.articleForFilter
})

export default connect(
  mapStateToProps,
  { filterArticle }
)(SelectFilter)
