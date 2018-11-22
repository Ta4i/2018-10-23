import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import { setLanguange } from '../../ac'
import InterContext from '../../contexts/inter'

class LangSelector extends Component {
  render() {
    return (
      <InterContext.Consumer>
        {(value) => this.renderSelection(value)}
      </InterContext.Consumer>
    )
  }

  renderSelection = (value) => {
    const { selectLanguage, english, russian } = value

    const options = {
      en: { value: 'en', label: english },
      ru: { value: 'ru', label: russian }
    }

    return (
      <div>
        <h3>{selectLanguage}</h3>
        <Select
          options={Object.values(options)}
          value={options[this.props.language]}
          onChange={this.handleLanguageSelected}
        />
      </div>
    )
  }

  handleLanguageSelected = (language) => {
    this.props.selectLanguage(language.value)
  }
}

const mapStateToProps = (state) => ({ language: state.language })

const mapDispatchToProps = {
  selectLanguage: setLanguange
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LangSelector)
