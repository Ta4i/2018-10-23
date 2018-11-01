import React from 'react'
import { shallow } from 'enzyme'
import Comment from './comment'

describe('Comment', () => {
  const mockData = {
    user: 'test-user',
    text: 'some test text'
  }
  it('should render expected snapshot', function() {
    const wrapper = shallow(<Comment comment={mockData} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should have expected values', function() {
    const wrapper = shallow(<Comment comment={mockData} />)
    expect(wrapper.find('h4').text()).toEqual('test-user')
    expect(wrapper.find('p').text()).toEqual('some test text')
  })
})
