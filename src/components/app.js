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
    isMulti: true
  }

  static defaultProps = {
    numberOfMonths: 2
  }
  constructor(props) {
    super(props)
    this.handleDayClick = this.handleDayClick.bind(this)
    this.handleResetClick = this.handleResetClick.bind(this)
    this.state = this.getInitialState()
  }
  getInitialState() {
    return {
      from: undefined,
      to: undefined
    }
  }
  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state)
    this.setState(range)
  }
  handleResetClick() {
    this.setState(this.getInitialState())
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

  render() {
    const isMulti = this.state
    const { from, to } = this.state
    const modifiers = { start: from, end: to }
    return (
      <div>
        <UserForm />
        <Select
          options={this.optionsForSelect}
          onChange={this.handleSelectChange}
          value={this.state.selectedOption}
          isMulti={isMulti}
        />

        <p>
          {!from && !to && 'Please select the first day.'}
          {from && !to && 'Please select the last day.'}
          {from &&
            to &&
            `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
          {from &&
            to && (
              <button className="link" onClick={this.handleResetClick}>
                Reset
              </button>
            )}
        </p>
        <DayPicker
          className="Selectable"
          numberOfMonths={this.props.numberOfMonths}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />
        <ArticleList items={articles} />
      </div>
    )
  }
}
