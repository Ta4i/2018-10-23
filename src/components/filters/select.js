import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { selectedArticles, filteredArticles } from '../../ac'

class SelectFilter extends Component {
  render() {
    const { selectedArticles } = this.props

    return (
      <Select
        options={this.optionsForSelect}
        onChange={this.handleSelectChange}
        value={selectedArticles}
        isMulti
      />
    )
  }

  get optionsForSelect() {
    return this.props.articles.map((item) => ({
      value: item.id,
      label: item.title
    }))
  }

  handleSelectChange = (selectedOption, currentOption) => {
    //let value = null;

    /*if ( currentOption.action === 'select-option' ) {
      value = currentOption.option.value;
    } else {
      value = currentOption.removedValue.value;
    }

    let selectAction = {
      action: currentOption.action,
      id: value
    }*/

    this.props.dispatchSelectedArticles(selectedOption)
    //this.props.dispatchFilteredArticles( selectAction );
  }
}

const mapStateToProps = (store) => ({
  selectedArticles: store.selectedArticles
  //filteredArticles: store.filteredArticles,
})

const mapDispatchToProps = {
  dispatchSelectedArticles: selectedArticles
  //dispatchFilteredArticles: filteredArticles,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectFilter)
