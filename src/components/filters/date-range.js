import React from 'react'
import { connect } from 'react-redux'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import { setFilter, resetFilter } from '../../ac'

class Example extends React.Component {
  static defaultProps = {
    numberOfMonths: 2,
    filter: {}
  }
  handleDayClick = (day) => {
    debugger
    const range = DateUtils.addDayToRange(day, this.props.filter)
    this.props.setFilter(range)
  }
  handleResetClick = () => {
    this.props.resetFilter()
  }
  render() {
    const { from, to } = this.props.filter
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
  filter: store.filter
})

const mapDispatchToProps = {
  setFilter,
  resetFilter
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Example)
