import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { isSearching } from '../actions/isSearching';
import Lang from './Lang';

class Search extends Component {
  render() {
    console.log(this.props.searching, this.props.searchResults);
    return (
      <div>
        <input
          type="text"
          placeholder="Search"
          onInput={(evt) => this.props.isSearching(evt.target.value)}
        />
        {this.props.searching && this.props.searchResults ? (
          <div className="search-options">
            <ul>
              {this.props.searchResults.map((searchResult, index) => (
                <li key={index}>
                  <a href="">{searchResult.title.substring(0, 100)}</a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <Lang />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchResults: state.searchResults.searchResults,
  searching: state.searchResults.isSearching,
  lang: state.lang,
});

const mapDispatchToProps = (dispatch) => ({
  isSearching: (query) => dispatch(isSearching(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
