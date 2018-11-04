import React from 'react'
import { connect } from 'react-redux'
import DayPicker, { DateUtils } from 'react-day-picker'
import { filterByDate } from '../../ac'
import 'react-day-picker/lib/style.css'

class DateRange extends React.Component {
  static defaultProps = {
    numberOfMonths: 2
  }

  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(
      day,
      this.props.filteredArticlesByDate
    )
    this.props.filterByDate(range.from, range.to)
  }

  handleResetClick = () => {
    this.props.filterByDate(undefined, undefined)
  }

  render() {
    const { from, to } = this.props.filteredArticlesByDate
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
  filteredArticlesByDate: state.filteredArticlesByDate
})

const mapDispatchToProps = {
  filterByDate: filterByDate
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateRange)
