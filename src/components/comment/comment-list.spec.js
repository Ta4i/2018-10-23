import React from 'react'
import Enzyme, { render, mount } from 'enzyme'
import AdapterReact16 from 'enzyme-adapter-react-16'
import CommentList from './comment-list'
import articles from '../../fixtures'

Enzyme.configure({ adapter: new AdapterReact16() })

describe('Comment list', () => {
  it('renders comments of first article', () => {
    const wrapper = render(<CommentList comments={articles[0].comments} />)

    expect(wrapper.find("[data-test='tested-item']").length).toEqual(
      articles[0].comments.length
    )
  })

  it('shows comments of first article', (done) => {
    const wrapper = mount(
      <CommentList comments={articles[0].comments} isOpen={false} />
    )

    wrapper
      .find("[data-test='tested-button']")
      .at(0)
      .simulate('click')

    const wrapperAfterClose = mount(
      <CommentList
        comments={articles[0].comments}
        fetchTestData={() => {
          done()
        }}
      />
    )

    expect(wrapperAfterClose.find('[data-test="tested-item"]').length).toEqual(
      5
    )
  })
})
