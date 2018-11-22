import React from 'react'
import { connect } from 'react-redux'
import DayPicker, { DateUtils } from 'react-day-picker'
import { changeDateRange } from '../../ac'
import InterContext from '../../contexts/inter'
import 'react-day-picker/lib/style.css'

class DateRange extends React.Component {
  static defaultProps = {
    numberOfMonths: 2
  }

  handleDayClick = (day) => {
    const { changeDateRange, range } = this.props
    changeDateRange(DateUtils.addDayToRange(day, range))
  }

  render() {
    const { from, to } = this.props.range
    const modifiers = { start: from, end: to }
    return (
      <InterContext.Consumer>
        {({ selectFirstDate, selectLastDate, selectedDate }) => (
          <div className="RangeExample">
            <p>
              {!from && !to && selectFirstDate}
              {from && !to && selectLastDate}
              {from &&
                to &&
                selectedDate(
                  from.toLocaleDateString(),
                  to.toLocaleDateString()
                )}{' '}
            </p>
            <DayPicker
              className="Selectable"
              numberOfMonths={this.props.numberOfMonths}
              selectedDays={[from, { from, to }]}
              modifiers={modifiers}
              onDayClick={this.handleDayClick}
            />
          </div>
        )}
      </InterContext.Consumer>
    )
  }
}

export default connect(
  (state) => ({
    range: state.filters.dateRange
  }),
  { changeDateRange }
)(DateRange)
