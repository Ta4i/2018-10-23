import React from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

export default class Example extends React.Component {
  static defaultProps = {
    numberOfMonths: 2
  }

  handleDayClick = (day) => {
    const { dateRange, dateRangeChanged } = this.props
    const newRange = DateUtils.addDayToRange(day, dateRange)
    dateRangeChanged(newRange)
  }

  handleResetClick = () => {
    const { dateRangeChanged } = this.props
    dateRangeChanged({
      from: undefined,
      to: undefined
    })
  }

  render() {
    const {
      dateRange: { from, to }
    } = this.props
    const modifiers = { start: from, end: to }
    return (
      <div className="RangeExample">
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
      </div>
    )
  }
}
