import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from './select'
import DateRange from './date-range'
import * as actions from '../../ac'

class Filters extends Component {
  render() {
    return (
      <div>
        <Select
          articles={this.props.articles}
          selectedOption={this.props.articlesFilter}
          selectedArticlesChanged={this.props.selectedArticlesChanged}
        />
        <DateRange
          dateRange={this.props.dateFilter}
          dateRangeChanged={this.props.dateRangeChanged}
        />
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    articles: store.articles,
    dateFilter: store.dateFilter,
    articlesFilter: store.articlesFilter
  }
}

const mapDispatchToProps = {
  selectedArticlesChanged: actions.selectedArticlesChanged,
  dateRangeChanged: actions.dateRangeChanged
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters)
