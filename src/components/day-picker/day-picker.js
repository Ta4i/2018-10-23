import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import Helmet from 'react-helmet'

import 'react-day-picker/lib/style.css'

export default class DayChooser extends Component {
  static defaultProps = {
    numberOfMonths: 1
  }

  constructor(props) {
    super(props)
    this.state = {
      from: undefined,
      to: undefined
    }
  }

  getInitialState() {
    this.setState({
      from: undefined,
      to: undefined
    })
  }

  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state)
    this.setState(range)
  }

  handleResetClick = () => {
    this.setState(this.getInitialState())
  }

  render() {
    const { from, to } = this.state
    const modifiers = { start: from, end: to }
    return (
      <div className="RangeExample">
        <DayPicker
          className="Selectable"
          numberOfMonths={this.props.numberOfMonths}
          selectedDays={{ from, to }}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
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
        <Helmet>
          <style>
            {`
                      .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
                        background-color: #f0f8ff !important;
                        color: green;
                      }
                      .Selectable .DayPicker-Day {
                        border-radius: 0 !important;
                      }
                      .Selectable .DayPicker-Day--start {
                        border-top-left-radius: 50% !important;
                        border-bottom-left-radius: 50% !important;
                        background-color: green !important;
                      }
                      .Selectable .DayPicker-Day--end {
                        border-top-right-radius: 50% !important;
                        border-bottom-right-radius: 50% !important;
                        background-color: green !important;
                      }`}
          </style>
        </Helmet>
      </div>
    )
  }
}
