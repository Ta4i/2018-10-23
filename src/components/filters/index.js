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
          selectedOption={this.props.filter.selectedArticles}
          selectedArticlesChanged={this.props.selectedArticlesChanged}
        />
        <DateRange
          dateRange={this.props.filter.dateRange}
          dateRangeChanged={this.props.dateRangeChanged}
        />
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  console.log('filter = ' + JSON.stringify(store.filter))
  return {
    articles: store.articles,
    filter: store.filter
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
