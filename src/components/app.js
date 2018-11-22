import React, { Component } from 'react'
import UserForm from './user-form'
import Filters from './filters'
import Counter from './counter'
import { Route, Switch, Redirect } from 'react-router-dom'
import ArticlesRoute from '../routes/articles'
import CommentsPage from '../routes/comments-page'
import Menu, { MenuItem } from './menu'
import { Provider as AuthProvider } from '../contexts/auth'
import InterContext, { inter } from '../contexts/inter'
import LangSelector from './lang-selector'
import store from '../store'

class App extends Component {
  state = {
    userName: '',
    language: 'en'
  }

  componentDidMount() {
    this.updateLang()
    store.subscribe(() => {
      this.updateLang()
    })
  }

  updateLang = () => this.setState({ language: store.getState().language })

  handleUserChange = (userName) => this.setState({ userName })

  render() {
    return (
      <InterContext.Provider value={inter[this.state.language]}>
        <AuthProvider value={{ userNameFromContext: this.state.userName }}>
          <InterContext.Consumer>
            {({ counter, filters, articles, comments, lang }) => (
              <div>
                <UserForm
                  onChange={this.handleUserChange}
                  value={this.state.userName}
                />
                <Menu>
                  <MenuItem to="/language">{lang}</MenuItem>
                  <MenuItem to="/counter">{counter}</MenuItem>
                  <MenuItem to="/filters">{filters}</MenuItem>
                  <MenuItem to="/articles">{articles}</MenuItem>
                  <MenuItem to="/comments/1">{comments}</MenuItem>
                </Menu>

                <Switch>
                  <Redirect from={'/'} to={'/articles'} exact />
                  <Route path="/language" exact component={LangSelector} />
                  <Route path="/counter" exact component={Counter} strict />
                  <Route path="/filters" component={Filters} />
                  <Route
                    path="/articles/new"
                    render={() => <h2>New Article</h2>}
                  />
                  <Route path="/articles" component={ArticlesRoute} />
                  <Route path="/comments" component={CommentsPage} />
                  <Route path="/error" render={() => <h1>Error page</h1>} />
                </Switch>
              </div>
            )}
          </InterContext.Consumer>
        </AuthProvider>
      </InterContext.Provider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language
  }
}

export default App
