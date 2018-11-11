import React from 'react'
import { Provider } from 'react-redux'
import { render, shallow, mount } from 'enzyme'
import DecoratedArticleList, { ArticleList } from './article-list'
import { normalizedArticles } from '../../fixtures'
import configureStore from 'redux-mock-store'
import { defaultFilter } from '../../reducer/filters'

describe('Article List', () => {
  let store

  beforeEach(() => {
    const mockStore = configureStore()

    const initialState = {
      articles: normalizedArticles,
      filters: defaultFilter
    }

    store = mockStore(initialState)
  })

  it('should render articles', function() {
    const wrapper = shallow(
      <ArticleList articles={normalizedArticles} toggleOpenItem={() => {}} />
    )

    expect(wrapper.find('.test--article-list_item').length).toEqual(
      normalizedArticles.length
    )
  })

  it('should render all Articles closed', function() {
    const wrapper = render(
      <Provider store={store}>
        <ArticleList articles={normalizedArticles} toggleOpenItem={() => {}} />
      </Provider>
    )

    expect(wrapper.find('.test--article__body').length).toEqual(0)
  })

  it('should open Article on click', function() {
    const wrapper = mount(
      <Provider store={store}>
        <ArticleList articles={normalizedArticles} toggleOpenItem={() => {}} />
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
      <Provider store={store}>
        <DecoratedArticleList
          articles={normalizedArticles}
          fetchData={() => {
            done()
          }}
        />
      </Provider>
    )
  })

  it('should close an article', (done) => {
    const wrapper = mount(
      <Provider store={store}>
        <DecoratedArticleList articles={normalizedArticles} />
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
