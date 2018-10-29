import React, { Component } from 'react'
import Select from 'react-select'
import articles from '../fixtures'
import UserForm from './user-form'
import ArticleList from './article-list'
import DayPickerRange from './day-picker-range'

export default class App extends Component {
  state = {
    selectedOption: null
  }
  render() {
    return (
      <div>
        <UserForm />
        <DayPickerRange />
        <Select
          isMulti={true}
          options={this.optionsForSelect}
          onChange={this.handleSelectChange}
          value={this.state.selectedOption}
        />
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
