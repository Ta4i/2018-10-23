import React from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import { connect } from 'react-redux'
import { filterDate } from '../../ac'

class Example extends React.Component {
  static defaultProps = {
    numberOfMonths: 1
  }

  static initialState() {
    return {
      from: undefined,
      to: undefined
    }
  }

  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.props.currentRange)
    this.props.filterDate(range)
  }

  handleResetClick = () => {
    this.props.filterDate(Example.initialState())
  }

  render() {
    const { from, to } = this.props.currentRange
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

const mapStateToProps = (store) => ({
  currentRange: store.currentRange
})

export default connect(
  mapStateToProps,
  { filterDate }
)(Example)
