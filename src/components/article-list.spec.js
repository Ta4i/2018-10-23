import React from 'react'
import Enzyme, { render, shallow, mount } from 'enzyme'
import AdapterReact16 from 'enzyme-adapter-react-16'
import DecorArticleList, { ArticleList } from './article-list'
import articles from '../fixtures'
import { callbackify } from 'util'

Enzyme.configure({ adapter: new AdapterReact16() })

describe('Article List', () => {
  it('Test render ArticleList', function() {
    const wrapper = shallow(<ArticleList items={articles} />)

    expect(wrapper.find('.test-article-list-item').length).toEqual(
      articles.length
    ) // все статьи должны быть
  })

  it('Test render Articles closed', function() {
    const wrapper = render(<ArticleList items={articles} />)

    expect(wrapper.find('.test-article_body').length).toEqual(0) // не должно быть статей - все закрыты
  })

  it('Test render Article on click', function() {
    const wrapper = mount(<DecorArticleList items={articles} />)

    wrapper
      .find('.test-article_btn')
      .at(0)
      .simulate('click')

    expect(wrapper.find('.test-article_body').length).toEqual(1) // при нажатии кнопки только одна статья видна
  })

  // Тест на закрытие статьи - перед тестом надо отключить (закомментироовать) анимацию в Article, так как события в mount отрабатывают быстрее, чем анимация
  it('Test render Article on click Close', function(done) {
    const wrapper = mount(
      <DecorArticleList
        items={articles}
        //fetchData={() => {done()}}
      />
    )

    // нашли кнопку
    const btn = wrapper.find('.test-article_btn').at(0)

    // кликнули первывй раз и открыли статью
    btn.simulate('click')

    // проверилил, что текст на кнопке теперь  = close
    expect(btn.text()).toEqual('close')

    // проверили, что есть одна открытая статья
    expect(wrapper.find('.test-article_body').length).toEqual(1)

    // кликнули на кнопке close
    btn.simulate('click')

    // проверилил, что текст на кнопке теперь  = open
    expect(btn.text()).toEqual('open')

    // если анимация отключена, то тест проходит, или подождать, пока анимация отыграет, вопрос как...

    // проверили, что нет открытых статей
    expect(wrapper.find('.test-article_body').length).toEqual(0)
  })
})
