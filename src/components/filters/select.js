import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { filterArticlesBySelect } from '../../ac'

class SelectFilter extends Component {
  render() {
    return (
      <Select
        options={this.optionsForSelect}
        onChange={this.handleChange}
        //value={this.state.selectedOption}
        isMulti
      />
    )
  }

  handleChange = (selection) => {
    this.props.filterArticles(selection.map((item) => item.value))
  }

  get optionsForSelect() {
    return this.props.articles.map((item) => ({
      value: item.id,
      label: item.title
    }))
  }
}

const mapStateToProps = (store) => ({
  articles: store.articles
})

const mapDispatchToProps = {
  filterArticles: filterArticlesBySelect
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectFilter)
