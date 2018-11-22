import { createContext } from 'react'

const Dictionary = {
  Ru: {
    userFormName: 'Имя пользователя: ',
    mainMenuName: 'Главное меню',
    mainMenuCounter: 'Счетчик',
    mainMenuFilters: 'Фильтры',
    mainMenuArticles: 'Статьи',
    mainMenuComments: 'Комментарии',
    articleChoose: 'Пожалуйста, выберете статью',
    countInc: 'Увеличить',
    delete: 'Удалить',
    hide: 'скрыть комментарии',
    show: 'показать комментарии',
    userCommentName: 'имя: ',
    userComment: 'комментарий: ',
    sendComment: 'отправить'
  },

  En: {
    userFormName: 'User name: ',
    mainMenuName: 'Main menu',
    mainMenuCounter: 'Counter',
    mainMenuFilters: 'Filters',
    mainMenuArticles: 'Articles',
    mainMenuComments: 'Comments',
    articleChoose: 'Please select an Article',
    countInc: 'Increase',
    delete: 'Delete',
    hide: 'hide comments',
    show: 'show comments',
    userCommentName: 'user: ',
    userComment: 'comment: ',
    sendComment: 'submit'
  }
}
/*
const { Provider, Consumer } = createContext({
    userFormName: Dictionary.En.userFormName
})*/

const { Provider, Consumer } = createContext(Dictionary.En)

export { Provider, Consumer, Dictionary }
