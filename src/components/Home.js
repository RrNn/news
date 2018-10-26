import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeSideNav from './HomeSideNav';
import HomeFooterContent from './HomeFooterContent';
import Loader from './Loader';
import { getHeadlines } from '../actions/getHeadlines';
import { getApple } from '../actions/getApple';
import { getSamsung } from '../actions/getSamsung';
import { getBusiness } from '../actions/getBusiness';
import { getSports } from '../actions/getSports';
import { getEntertainment } from '../actions/getEntertainment';

class Home extends Component {
  componentDidMount() {
    const lang = this.props.lang.lang;

    this.props.newsType === 'headlines'
      ? this.props.getHeadlines(lang)
      : this.props.newsType === 'business'
      ? this.props.getBusiness(lang)
      : this.props.newsType === 'sports'
      ? this.props.getSports(lang)
      : this.props.newsType === 'apple'
      ? this.props.getApple(lang)
      : this.props.newsType === 'samsung'
      ? this.props.getSamsung(lang)
      : this.props.newsType === 'entertainment'
      ? this.props.getEntertainment(lang)
      : null;
  }

  componentWillReceiveProps(newProps) {
    if (newProps.lang.lang !== this.props.lang.lang) {
      const lang = newProps.lang.lang;

      newProps.newsType === 'headlines'
        ? newProps.getHeadlines(lang)
        : newProps.newsType === 'business'
        ? newProps.getBusiness(lang)
        : newProps.newsType === 'sports'
        ? newProps.getSports(lang)
        : newProps.newsType === 'apple'
        ? newProps.getApple(lang)
        : newProps.newsType === 'samsung'
        ? newProps.getSamsung(lang)
        : newProps.newsType === 'entertainment'
        ? newProps.getEntertainment(lang)
        : null;
    }
  }

  render() {
    const { newsType } = this.props;

    console.log('.THE_PROPS', this.props);
    // top 2 headlines
    const top2 = this.props[newsType][newsType].slice(0, 2);
    // top 3 headlines
    const top3 = this.props[newsType][newsType].slice(2, 5);
    // other top news
    const otherTopNews = this.props[newsType][newsType].slice(5);

    return !this.props[newsType][newsType].length &&
      this.props[newsType].success == null ? (
      <Loader />
    ) : !this.props[newsType][newsType].length &&
      this.props[newsType].success ? (
      <div className="no-news-here">
        <h1>No News Here</h1>
      </div>
    ) : (
      <div className="home-container">
        <div className="row">
          {top2.map((headline, index) => (
            <div key={index} className="top-2">
              <a href={headline.url} target="blank">
                <div className="top-2-image-wrapper">
                  <img
                    src={headline.urlToImage}
                    className="top-2-image"
                    alt="img"
                  />
                  <small className="news-source">{headline.source.name}</small>
                </div>

                <div className="top-2-headline-title">{headline.title}</div>

                <div className="top-2-headline-content">
                  {headline.content
                    ? headline.content.substring(0, 200) + '...'
                    : ''}
                </div>
              </a>
            </div>
          ))}

          <div className="right-side-bar">
            <HomeSideNav otherTopNews={otherTopNews} />
          </div>
        </div>

        <HomeFooterContent top3={top3} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  headlines: state.headlines,
  apple: state.apple,
  business: state.business,
  sports: state.sports,
  samsung: state.samsung,
  entertainment: state.entertainment,
  lang: state.lang,
});

const mapDispatchToProps = (dispatch) => ({
  getHeadlines: (lang) => dispatch(getHeadlines(lang)),
  getApple: (lang) => dispatch(getApple(lang)),
  getBusiness: (lang) => dispatch(getBusiness(lang)),
  getSports: (lang) => dispatch(getSports(lang)),
  getSamsung: (lang) => dispatch(getSamsung(lang)),
  getEntertainment: (lang) => dispatch(getEntertainment(lang)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
