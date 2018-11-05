import React from 'react'
import { render, shallow, mount } from 'enzyme'
import DecoratedArticleList, { ArticleList } from './article-list'
import articles from '../../fixtures'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const reducerStub = (state, action) => ({
  selectedArticleIds: [articles[0].id],
  selectedDateRange: {
    from: null,
    to: null
  },
  articles: articles
})

describe('Article List', () => {
  it('should render articles', function() {
    const wrapper = shallow(
      <ArticleList articles={articles} toggleOpenItem={() => {}} />
    )

    expect(wrapper.find('.test--article-list_item').length).toEqual(
      articles.length
    )
  })

  it('should render all Articles closed', function() {
    const wrapper = render(
      <Provider store={createStore(reducerStub)}>
        <ArticleList articles={articles} toggleOpenItem={() => {}} />
      </Provider>
    )

    expect(wrapper.find('.test--article__body').length).toEqual(0)
  })

  it('should open Article on click', function() {
    const wrapper = mount(
      <Provider store={createStore(reducerStub)}>
        <DecoratedArticleList />
      </Provider>
    )

    wrapper
      .find('.test--article__btn')
      .at(0)
      .simulate('click')

    expect(wrapper.find('.test--article__body').length).toEqual(1)
  })

  it('should call fetch data', function(done) {
    mount(
      <Provider store={createStore(reducerStub)}>
        <DecoratedArticleList
          fetchData={() => {
            done()
          }}
        />
      </Provider>
    )
  })

  it('should close an article', (done) => {
    const wrapper = mount(
      <Provider store={createStore(reducerStub)}>
        <DecoratedArticleList />
      </Provider>
    )

    expect(wrapper.find('.test__article_body').length).toEqual(0)

    wrapper
      .find('.test--article__btn')
      .at(0)
      .simulate('click')

    expect(wrapper.find('.test--article__body').length).toEqual(1)

    wrapper
      .find('.test--article__btn')
      .at(0)
      .simulate('click')

    setTimeout(() => {
      try {
        wrapper.simulate('transitionEnd')
        expect(wrapper.find('.test--article__body').length).toEqual(0)
        done()
      } catch (err) {
        done.fail(err)
      }
    }, 800)
  })
})
