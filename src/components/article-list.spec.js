import React from 'react'
import { render, shallow, mount } from 'enzyme'
import DecoratedArticleList, { ArticleList } from './article-list'
import articles from '../fixtures'

//Enzyme.configure({ adapter: new AdapterReact16() })

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
      <ArticleList articles={articles} toggleOpenItem={() => {}} />
    )

    expect(wrapper.find('.test--article__body').length).toEqual(0)
  })

  it('should open Article on click', function() {
    const wrapper = mount(<DecoratedArticleList articles={articles} />)
    wrapper
      .find('.test--article__btn')
      .at(0)
      .simulate('click')

    expect(wrapper.find('.test--article__body').length).toEqual(1)
  })

  it('should call fetch data', function(done) {
    mount(
      <DecoratedArticleList
        articles={articles}
        fetchData={() => {
          done()
        }}
      />
    )
  })
  it('should close opened decorated article', function(done) {
    const wrapper = mount(<DecoratedArticleList articles={articles} />)
    wrapper
      .find('.test--article__btn')
      .at(0)
      .simulate('click')
    wrapper
      .find('.test--article__btn')
      .at(0)
      .simulate('click')
    const waitForClose = () => {
      wrapper.update()
      if (wrapper.find('.test--article__body').length != 0) {
        setTimeout(waitForClose, 100)
      } else {
        done()
      }
    }
    waitForClose()
  })
})
