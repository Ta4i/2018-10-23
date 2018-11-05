import React, { Component } from 'react'
import Select from './select'
import DateRange from './date-range'
import { connect } from 'react-redux'

class Filters extends Component {
  render() {
    const { articles } = this.props

    return (
      <div>
        <Select articles={articles} />
        <DateRange />
      </div>
    )
  }
}

const mapStateToProps = (store) => ({
  articles: store.articles
})

export default connect(mapStateToProps)(Filters)
