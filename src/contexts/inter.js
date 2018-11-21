import { createContext } from 'react'

export const inter = {
  en: {
    deleteArticle: 'Delete article',
    mainMenu: 'Main menu',
    userName: 'User name',
    showComments: 'Show comments',
    hideComments: 'Hide comments',
    counter: 'Counter',
    filters: 'Filters',
    articles: 'Articles',
    comments: 'Comments',
    increase: 'Increase',
    selectFirstDate: 'Please select first day',
    selectLastDate: 'Please select last day',
    selectedDate: (from, to) => `Selected date from ${from} to ${to}`,
    selectArticle: 'Please select an article',
    loading: 'Loading...',
    user: 'User',
    comment: 'Comment'
  },
  ru: {
    deleteArticle: 'Удалить статью',
    mainMenu: 'Главное меню',
    userName: 'Имя пользователя',
    showComments: 'Отобразить комментарии',
    hideComments: 'Скрыть комментарии',
    counter: 'Счетчик',
    filters: 'Фильтры',
    articles: 'Статьи',
    comments: 'Комментарии',
    increase: 'Увеличить',
    selectFirstDate: 'Пожалуйста, выберите первый день',
    selectLastDate: 'Пожалуйста, выберите последний день',
    selectedDate: (from, to) => `Выбрана дата с ${from} по ${to}`,
    selectArticle: 'Пожалуйста, выберите статью',
    loading: 'Загружаю...',
    user: 'Пользователь',
    comment: 'Комментарий'
  }
}

const InterContext = createContext(inter.en)

export default InterContext
