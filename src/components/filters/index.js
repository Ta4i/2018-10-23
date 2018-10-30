import React, { Component } from 'react'
import Select from './select'
import DateRange from './date-range'

class Filters extends Component {
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
