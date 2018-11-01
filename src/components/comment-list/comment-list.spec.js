import React from 'react'
import Enzyme, { render, shallow, mount } from 'enzyme'
import AdapterReact16 from 'enzyme-adapter-react-16'
import DecoratedCommentList, { CommentList } from './comment-list'

Enzyme.configure({ adapter: new AdapterReact16() })

describe('Comment List', () => {
  const comments = [
    {
      id: '1',
      user: 'User 1',
      text: 'Comment 1'
    },
    {
      id: '2',
      user: 'User 2',
      text: 'Comment 2'
    }
  ]

  it('should render comments when open', function() {
    const wrapper = shallow(
      <CommentList
        comments={comments}
        isOpen={true}
        toggleOpenItem={() => {}}
      />
    )

    expect(wrapper.find('[data-comment]').length).toEqual(2)
  })

  it('should not render comments when closed', function() {
    const wrapper = shallow(
      <CommentList
        comments={comments}
        isOpen={false}
        toggleOpenItem={() => {}}
      />
    )

    expect(wrapper.find('[data-comment]').length).toEqual(0)
  })

  it('should show comments on click', function() {
    const wrapper = mount(
      <DecoratedCommentList
        comments={comments}
        isOpen={false}
        toggleOpenItem={() => {}}
      />
    )

    wrapper
      .find('[data-comments-button]')
      .at(0)
      .simulate('click')

    expect(wrapper.find('[data-comment]').length).toEqual(2)
  })
})
