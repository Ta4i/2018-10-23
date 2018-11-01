import React from 'react'
import Enzyme, { render, shallow, mount } from 'enzyme'
import AdapterReact16 from 'enzyme-adapter-react-16'
import DecoratedCommentList, { CommentList } from './comment-list'
import articles from '../../fixtures'

Enzyme.configure({ adapter: new AdapterReact16() })

describe('Comment List', () => {
  it('should render comments when open', function() {
    const wrapper = render(
      <CommentList isOpen comments={articles[0].comments} />
    )

    expect(wrapper.find('.test--comment-list_item').length).toEqual(5)
  })

  it('should not render comments when hidden', function() {
    const wrapper = render(
      <CommentList isOpen={false} comments={articles[0].comments} />
    )

    expect(wrapper.find('.test--comment-list_item').length).toEqual(0)
  })

  it('should not render comments while button not clicked', function() {
    const wrapper = render(
      <CommentList isOpen={false} comments={articles[0].comments} />
    )

    expect(wrapper.find('.test--comment-list_item').length).toEqual(0)
  })

  it('should render comments when button clicked', function() {
    const wrapper = mount(
      <DecoratedCommentList comments={articles[0].comments} />
    )

    wrapper
      .find('.test--comment-list__btn')
      .at(0)
      .simulate('click')

    expect(wrapper.find('.test--comment-list_item').length).not.toEqual(0)
  })
})
