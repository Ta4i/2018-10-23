import React, { Component } from 'react'
import ArticleList from './article-list'
import articles from '../fixtures'
import UserForm from './user-form'
import Select from 'react-select'
import DayPicker from 'react-day-picker'
import DayRangePicker from './day-range-picker'
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
          isMulti
          options={this.optionsForSelect}
          onChange={this.handleSelectChange}
          value={this.state.selectedOptions}
        />
        <DayRangePicker />
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

  handleSelectChange = (selectedOptions) => {
    this.setState({ selectedOptions })
  }
}
