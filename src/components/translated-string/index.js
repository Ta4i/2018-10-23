import React from 'react'
import { Consumer as LocaleConsumer } from '../../contexts/language'
import PropTypes from 'prop-types'
import strings from '../../i18n'

const TranslatedString = (props) => (
  <LocaleConsumer>
    {(value) => {
      if (!(value.language in strings)) {
        return 'cannot find language ' + value.language
      }

      const stringName = props.name
      const languageFromContext = strings[value.language]

      if (!(stringName in languageFromContext))
        return 'cannot find string ' + stringName

      return languageFromContext[stringName]
    }}
  </LocaleConsumer>
)

TranslatedString.protoTypes = {
  name: PropTypes.string.isRequired
}

export default TranslatedString
