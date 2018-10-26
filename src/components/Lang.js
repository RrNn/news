import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeLanguage } from '../actions/changeLanguage';

class Lang extends Component {
  render() {
    return (
      <select
        className="lang"
        name="lang"
        onChange={(evt) => this.props.changeLanguage(evt.target.value)}
      >
        <option value="">--language--</option>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="se">Spanish (Uruguay)</option>
        <option value="fr">French</option>
        <option value="jp">Japanese</option>
        <option value="ar">Arabic</option>
        <option value="de">German</option>
        <option value="he">Hebrew</option>
        <option value="it">Italian</option>
        <option value="nl">Dutch</option>
        <option value="no">Norwegian</option>
        <option value="pt">Portuguese</option>
        <option value="ru">Russian</option>
        <option value="zh">Chinese</option>
      </select>
    );
  }
}

const mapStateToProps = (state) => ({
  lang: state.lang,
});

const mapDispatchToProps = (dispatch) => ({
  changeLanguage: (lang) => dispatch(changeLanguage(lang)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lang);
