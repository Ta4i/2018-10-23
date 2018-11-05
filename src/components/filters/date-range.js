import React from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { selectDateRange } from '../../ac'
import 'react-day-picker/lib/style.css'

class DateRange extends React.Component {
  static defaultProps = {
    numberOfMonths: 2
  }

  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.props.selectedDateRange)
    this.props.dispatchSelectDateRange(range)
  }

  handleResetClick = () => {
    this.props.dispatchSelectDateRange({ from: null, to: null })
  }

  render() {
    const { from, to } = this.props.selectedDateRange
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
          initialMonth={this.props.initialMonth}
        />
      </div>
    )
  }
}

const mapStateToProps = (store) => ({
  selectedDateRange: store.selectedDateRange,
  initialMonth: getInitialMonth(store)
})

const getInitialMonth = (store) => {
  const dates = store.articles.map((article) => new Date(article.date))
  const minDate = new Date(Math.min.apply(null, dates))
  return minDate
}

export default connect(
  mapStateToProps,
  { dispatchSelectDateRange: selectDateRange }
)(DateRange)
