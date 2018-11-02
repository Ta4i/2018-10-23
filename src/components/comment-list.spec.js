import React from 'react'
import Enzyme, { render, shallow, mount } from 'enzyme'
import AdapterReact16 from 'enzyme-adapter-react-16'
import { CommentList } from './comment-list.js'
import articles from '../fixtures'

describe('Comment List', () => {
  it('should nothing', function() {
    const wrapper = shallow(<CommentList comments={[{ comment: 'asdf' }]} />)

    expect(wrapper.find('.test--comment__list').length).toEqual(2)
  })
})
