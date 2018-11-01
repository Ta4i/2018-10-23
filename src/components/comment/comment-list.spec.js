import React from 'react'
import Enzyme, { render, mount } from 'enzyme'
import AdapterReact16 from 'enzyme-adapter-react-16'
import CommentList from './comment-list'
import articles from '../../fixtures'
import Article from '../article/article'

Enzyme.configure({ adapter: new AdapterReact16() })

describe('Comment list', () => {
  it('renders comments of first article', () => {
    const wrapper = render(<CommentList comments={articles[0].comments} />)

    expect(wrapper.find("[data-test='tested-item']").length).toEqual(
      articles[0].comments.length
    )
  })

  it('hides comments of first article', () => {
    const wrapper = mount(<Article article={articles[0]} isOpen={true} />)

    wrapper
      .find("[data-test='tested-button']")
      .at(0)
      .simulate('click')

    setTimeout(() => {
      expect(wrapper.find("[data-test='tested-item']").length).toEqual(0)
    }, 3000)
  })
})
