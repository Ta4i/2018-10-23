import React, { Component } from 'react'
import UserForm from './user-form'
import Filters from './filters'
import Counter from './counter'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import ArticlesRoute from '../routes/articles'
import CommentsPage from '../routes/comments-page'
import Menu, { MenuItem } from './menu'

export default class App extends Component {
  render() {
    return (
      <div>
        <UserForm />
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
    )
  }
}
