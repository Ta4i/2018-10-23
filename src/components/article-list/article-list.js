import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  filteredArticleSelector,
  articleLoadingSelector,
  articleLoadedSelector
} from '../../selectors'

import Loader from '../common/loader'
import Article from '../article'
import accordion from '../../decorators/accordion'
import { loadAllArticles } from '../../ac'

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    fetchData: PropTypes.func,

    //from accordion decorator
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired
  }

  componentDidMount() {
    !this.props.loaded && this.props.fetchData && this.props.fetchData()
  }
  render() {
    if (this.props.loading) return <Loader />

    return <ul>{this.items}</ul>
  }

  get items() {
    return this.props.articles.map((item) => (
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

const mapStateToProps = (state) => {
  console.log('connect articles-list')
  return {
    articles: filteredArticleSelector(state),
    loading: articleLoadingSelector(state),
    loaded: articleLoadedSelector(state)
  }
}

const mapDispatchToProps = {
  fetchData: loadAllArticles
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(accordion(ArticleList))
