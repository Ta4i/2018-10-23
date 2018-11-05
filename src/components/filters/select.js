import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { selectArticles } from '../../ac'

class SelectFilter extends Component {
  render() {
    return (
      <Select
        options={this.optionsForSelect}
        onChange={this.handleSelectChange}
        value={this.selectedOptions}
        isMulti
      />
    )
  }

  get optionsForSelect() {
    return this.props.availableArticles.map((item) => ({
      value: item.id,
      label: item.title
    }))
  }

  get selectedOptions() {
    const selectedArticles = this.props.availableArticles.filter((article) =>
      this.props.selectedArticleIds.includes(article.id)
    )

    return selectedArticles.map((article) => ({
      value: article.id,
      label: article.title
    }))
  }

  handleSelectChange = (selectedOption) => {
    const selectedArticleIds = selectedOption.map((option) => option.value)
    this.props.dispatchSelectArticles(selectedArticleIds)
  }
}

const mapStateToProps = (store) => ({
  availableArticles: store.articles,
  selectedArticleIds: store.selectedArticleIds
})

export default connect(
  mapStateToProps,
  { dispatchSelectArticles: selectArticles }
)(SelectFilter)
