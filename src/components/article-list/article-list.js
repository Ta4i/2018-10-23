import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Article from '../article'
import accordion from '../../decorators/accordion'

export class ArticleList extends Component {
  static defaultProps = {
    filter: {}
  }
  static propTypes = {
    articles: PropTypes.array.isRequired,
    fetchData: PropTypes.func,

    //from accordion decorator
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetchData && this.props.fetchData()
  }
  render() {
    return <ul>{this.items}</ul>
  }

  get items() {
    return this.props.articles
      .filter((item) => {
        const { from, to, ids } = this.props.filter
        if (ids && ids.length && !~ids.indexOf(item.id)) return false
        const date = new Date(item.date)
        if (from && date < from) return false
        if (to && date > to) return false
        return true
      })
      .map((item) => (
        <li key={item.id} className={'test--article-list_item'}>
          <Article
            article={item}
            isOpen={this.props.openItemId === item.id}
            toggleOpen={this.props.toggleOpenItem}
          />
        </li>
      ))
  }
}

const mapStateToProps = (store) => ({
  articles: store.articles, // from store
  filter: store.filter
})

export default connect(mapStateToProps)(accordion(ArticleList))
