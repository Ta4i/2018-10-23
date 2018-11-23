import React, { Component } from 'react'
import UserForm from './user-form'
import Filters from './filters'
import Counter from './counter'
import { Route, Switch, Redirect } from 'react-router-dom'
import ArticlesRoute from '../routes/articles'
import CommentsPage from '../routes/comments-page'
import Menu, { MenuItem } from './menu'
import { Provider as AuthProvider } from '../contexts/auth'
import LangProvider from './i18n/lang-provider'

export default class App extends Component {
  state = {
    userName: '',
    language: 'en'
  }

  handleUserChange = (userName) => this.setState({ userName })
  changeLanguage = (language) => (ev) => this.setState({ language })

  render() {
    return (
      <LangProvider language={this.state.language}>
        <AuthProvider value={{ userNameFromContext: this.state.userName }}>
          <div>
            <ul>
              <li onClick={this.changeLanguage('en')}>English</li>
              <li onClick={this.changeLanguage('ru')}>Russian</li>
            </ul>
            <UserForm
              onChange={this.handleUserChange}
              value={this.state.userName}
            />
            <Menu>
              <MenuItem to="/counter">Counter</MenuItem>
              <MenuItem to="/filters">Filters</MenuItem>
              <MenuItem to="/articles">Articles</MenuItem>
              <MenuItem to="/comments/1">Comments</MenuItem>
            </Menu>

            <Switch>
              <Redirect from={'/'} to={'/articles'} exact />
              <Route path="/counter" exact component={Counter} strict />
              <Route path="/filters" component={Filters} />
              <Route path="/articles/new" render={() => <h2>New Article</h2>} />
              <Route path="/articles" component={ArticlesRoute} />
              <Route path="/comments" component={CommentsPage} />
              <Route path="/error" render={() => <h1>Error page</h1>} />
            </Switch>
          </div>
        </AuthProvider>
      </LangProvider>
    )
  }
}
