import React, { Component } from 'react'
import ArticleList from './article-list'
import UserForm from './user-form'
import Filters from './filters'
import Counter from './counter'
import { Route, NavLink } from 'react-router-dom'

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
        <Route path="/counter" component={Counter} />
        <Route path="/filters" component={Filters} />
        <Route path="/articles" component={ArticleList} />
      </div>
    )
  }
}
