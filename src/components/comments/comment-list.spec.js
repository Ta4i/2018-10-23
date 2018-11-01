import React from 'react'
import Enzyme, { render, shallow, mount } from 'enzyme'
import AdapterReact16 from 'enzyme-adapter-react-16'
import CommentList from './comment-list'
import articles from '../../fixtures'

Enzyme.configure({ adapter: new AdapterReact16() })

describe('Comment List', () => {
  it('should render comments', function() {
    const wrapper = mount(<CommentList comments={articles.comments} />)

    expect(wrapper.find('.test--comment-list_item').length).toEqual(
      articles.comments.length
    )
  })
})
