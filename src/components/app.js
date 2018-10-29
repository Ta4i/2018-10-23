import React, { Component } from 'react'
import ArticleList from './article-list'
import articles from '../fixtures'
import UserForm from './user-form'
import Select from 'react-select'
import DayPicker, { DateUtils } from 'react-day-picker'

// styles
import '../styles/app.css'
import 'react-day-picker/lib/style.css'

export default class App extends Component {
  state = {
    selectedOption: null,
    from: null,
    to: null
  }

  handleClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state)
    this.setState(range)
  }

  render() {
    const { from, to } = this.state
    const modifiers = {
      start: from,
      end: to
    }

    return (
      <div>
        <UserForm />
        <Select
          options={this.optionsForSelect}
          onChange={this.handleSelectChange}
          value={this.state.selectedOption}
        />
        <ArticleList items={articles} />
        <DayPicker
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleClick}
        />
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
