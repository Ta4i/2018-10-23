import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

export default class DayRange extends Component {
  state = {
    from: undefined,
    to: undefined
  }

  initialState() {
    return {
      from: null,
      to: null
    }
  }

  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(
      day,
      this.state.from && this.state.to ? this.initialState() : this.state
    )
    this.setState(range)
  }

  render() {
    const { from, to } = this.state
    return (
      <>
        <DayPicker
          onDayClick={this.handleDayClick}
          selectedDays={[from, { from, to }]}
        />
        <div>
          {(from || '-').toString()} - {(to || '-').toString()}
        </div>
      </>
    )
  }
}
