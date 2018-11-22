import React, { Component } from 'react'
import UserForm from './user-form'
import LangForm from './lang'
import Filters from './filters'
import Counter from './counter'
import { Route, Switch, Redirect } from 'react-router-dom'
import ArticlesRoute from '../routes/articles'
import CommentsPage from '../routes/comments-page'
import Menu, { MenuItem } from './menu'
import { Provider as AuthProvider } from '../contexts/auth'
import { Provider as LangProvider, Dictionary } from '../contexts/lang'
import { Consumer as LangConsumer } from '../contexts/lang'

export default class App extends Component {
  state = {
    userName: '',
    checkedEN: true
  }

  handleUserChange = (userName) => this.setState({ userName })

  handleLangChange = () => this.setState({ checkedEN: !this.state.checkedEN })
  /*
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('PREV', prevState.checkedEN);
    console.log('NOW', this.state.checkedEN);
  }*/

  render() {
    return (
      <AuthProvider value={{ userNameFromContext: this.state.userName }}>
        <div>
          <LangProvider
            value={this.state.checkedEN ? Dictionary.En : Dictionary.Ru}
          >
            <LangForm
              checkedEN={this.state.checkedEN}
              handleClick={this.handleLangChange}
            />
            <UserForm
              onChange={this.handleUserChange}
              value={this.state.userName}
            />
            <Menu>
              <MenuItem to="/counter">
                <LangConsumer>
                  {(value) => <span>{value.mainMenuCounter}</span>}
                </LangConsumer>
              </MenuItem>
              <MenuItem to="/filters">
                <LangConsumer>
                  {(value) => <span>{value.mainMenuFilters}</span>}
                </LangConsumer>
              </MenuItem>
              <MenuItem to="/articles">
                <LangConsumer>
                  {(value) => <span>{value.mainMenuArticles}</span>}
                </LangConsumer>
              </MenuItem>
              <MenuItem to="/comments/1">
                <LangConsumer>
                  {(value) => <span>{value.mainMenuComments}</span>}
                </LangConsumer>
              </MenuItem>
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
          </LangProvider>
        </div>
      </AuthProvider>
    )
  }
}
