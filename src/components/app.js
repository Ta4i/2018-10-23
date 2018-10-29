import React, { Component } from 'react'
import ArticleList from './article-list'
import articles from '../fixtures'
import UserForm from './user-form'
import Select from 'react-select'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

export default class App extends Component {
  state = {
    selectedOption: null,
    from: undefined,
    to: undefined
  }

  render() {
    const { from, to } = this.state
    const modifiers = { start: from, end: to }
    const dateRange = `${from ? from.toLocaleDateString('en-GB') : ''} ${
      from && to ? '-' : ''
    } ${to ? to.toLocaleDateString('en-GB') : ''}`

    return (
      <div>
        <UserForm />
        <Select
          options={this.optionsForSelect}
          onChange={this.handleSelectChange}
          value={this.state.selectedOption}
          isMulti
        />
        <input value={dateRange} />
        <DayPicker
          className="Selectable"
          modifiers={modifiers}
          selectedDays={[from, { from, to }]}
          onDayClick={this.handleDayClick}
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

  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state)
    this.setState(range)
  }
}
