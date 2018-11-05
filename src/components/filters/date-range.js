import React from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import 'react-day-picker/lib/style.css'
import * as consts from '../../constants'

class Example extends React.Component {
  static defaultProps = {
    numberOfMonths: 2
  }
  constructor(props) {
    super(props)

    this.state = this.getInitialState()
  }
  getInitialState() {
    return {
      from: undefined,
      to: undefined
    }
  }
  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state)
    this.setState(range)
    this.props.dispatch({
      type: consts.RANGE_SELECTED,
      payload: range
    })
  }
  handleResetClick = () => {
    this.setState(this.getInitialState())
    this.props.dispatch({
      type: consts.RANGE_RESET
    })
  }
  render() {
    const { from, to } = this.state
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

export default connect()(Example)
