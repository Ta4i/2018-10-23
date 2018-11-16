import React, { Component } from 'react'
import UserForm from './user-form'
import Filters from './filters'
import Counter from './counter'
import { Route, NavLink, Switch } from 'react-router-dom'
import ArticlesRoute from '../routes/articles'

export default class App extends Component {
  render() {
    return (
      <div>
        <UserForm />
        <div>
          <div>
            <NavLink to="/counter" activeClassName="active-menu">
              Counter
            </NavLink>
          </div>
          <div>
            <NavLink to="/filters" activeStyle={{ color: 'red' }}>
              Filters
            </NavLink>
          </div>
          <div>
            <NavLink to="/articles" activeStyle={{ color: 'red' }}>
              Articles
            </NavLink>
          </div>
        </div>
        <Switch>
          <Route path="/counter" exact component={Counter} />
          <Route path="/filters" component={Filters} />
          <Route path="/articles/new" render={() => <h2>New Article</h2>} />
          <Route path="/articles" component={ArticlesRoute} />
        </Switch>
      </div>
    )
  }
}
