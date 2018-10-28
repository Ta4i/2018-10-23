import React, { Component } from 'react'
import ArticleList from './article-list'
import articles from '../fixtures'
import UserForm from './user-form'
import Select from 'react-select'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'

export default class App extends Component {
  state = {
    selectedOption: null
  }
  render() {
    return (
      <div>
        <UserForm />
        <Select
          isMulti={true}
          options={this.optionsForSelect}
          onChange={this.handleSelectChange}
          value={this.state.selectedOption}
        />
        <DayPicker />
        <ArticleList items={articles} />
      </div>
    )
  }

  get optionsForSelect() {
    return articles.map((item) => ({
      value: item.id,
      label: item.title
    }))
  }

  handleSelectChange = (selectedOption) => {
    this.setState({ selectedOption })
  }
}
