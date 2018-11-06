import React from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import { dateRangeChanged } from '../../ac'
import { connect } from 'react-redux'

class DateRange extends React.Component {
  static defaultProps = {
    numberOfMonths: 2
  }

  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.props.dateRange)
    this.props.dateRangeChanged(range)
  }
  handleResetClick = () => {
    this.props.dateRangeChanged({
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

const mapStateToProps = (state) => ({
  dateRange: state.dateRange
})

const mapDispatchToProps = {
  dateRangeChanged: dateRangeChanged
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateRange)
