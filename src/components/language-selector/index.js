import React from 'react'
import { Consumer as LanguageConsumer } from '../../contexts/language'
import TranslatedString from '../translated-string'

const languages = [
  {
    id: 'en-US',
    displayName: 'English'
  },
  {
    id: 'ru-RU',
    displayName: 'Русский'
  }
]

const LanguageSelector = () => (
  <LanguageConsumer>
    {({ language, changeLanguage }) => {
      return (
        <div>
          <h2>
            <TranslatedString name="selectLanguage" />
          </h2>
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            value={language}
          >
            {languages.map(renderOption)}
          </select>
        </div>
      )
    }}
  </LanguageConsumer>
)

const renderOption = (language) => (
  <option key={language.id} value={language.id}>
    {language.displayName}
  </option>
)

export default LanguageSelector
