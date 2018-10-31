import React from 'react'
import { render, mount } from 'enzyme'
import CommentList from './comment-list'
import articles from '../../fixtures'

describe('<CommentList />', () => {
  const comments = articles[0].comments
  it('should have button with expected title when comments is closed', function() {
    const wrapper = render(<CommentList comments={comments} />)
    const button = wrapper.find('button')
    expect(button.length).toEqual(1)
    expect(button.text()).toEqual('show comments')
  })
  it('should have button with expected title when comments is opened', function() {
    const wrapper = mount(<CommentList comments={comments} />)
    const button = wrapper.find('button')
    button.simulate('click')
    expect(button.text()).toEqual('hide comments')
  })
  it('should not have comments by default', function() {
    const wrapper = render(<CommentList comments={comments} />)
    const button = wrapper.find('ul')
    expect(button.length).toEqual(0)
  })
  it('should have comments when button clicked', function() {
    const wrapper = mount(<CommentList comments={comments} />)
    wrapper.find('button').simulate('click')
    expect(wrapper.find('li').length).toEqual(comments.length)
  })
  it('should have comments when button clicked', function() {
    const wrapper = mount(<CommentList comments={[]} />)
    wrapper.find('button').simulate('click')
    expect(wrapper.find('h3').text()).toEqual('No comments yet')
  })
})
