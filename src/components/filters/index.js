import React, { Component } from 'react'
import Select from './select'
import DateRange from './date-range'
import PropTypes from 'prop-types'

class Filters extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  static defaultProps = {
    articles: []
  }

  render() {
    return (
      <div>
        <Select articles={this.props.articles} />
        <DateRange />
      </div>
    )
  }
}

export default Filters
