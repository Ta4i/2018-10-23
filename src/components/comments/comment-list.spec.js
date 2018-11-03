import React from 'react'
import Enzyme, { render, shallow, mount } from 'enzyme'
import AdapterReact16 from 'enzyme-adapter-react-16'
import DecorComent, { CommentList } from './Comment-list'
import items from '../../fixtures'

Enzyme.configure({ adapter: new AdapterReact16() })

describe('Comment List', () => {
  // моковые данные
  const comments = items[0].comments

  it('should render CommentList', function() {
    const wrapper = render(<CommentList items={comments} />)

    expect(wrapper.find('.test-comment-list-item').length).toEqual(0) // нет комментов - изначально закрыты
  })
})

it('should render Comment on click', function() {
  // моковые данные
  const comments = items[4].comments
  const wrapper = mount(<DecorComent items={comments} />)

  wrapper
    .find('.test-comment_button')
    .at(0)
    .simulate('click')

  expect(wrapper.find('.test-comment-list-item').length).toEqual(
    comments.length
  ) // при нажатии кнопки все комменты видны
})
