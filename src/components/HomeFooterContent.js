import React from 'react';

const HomeSideNav = ({ top3 }) => {
  return (
    <div className="home-footer-content">
      {top3.map((topNew, index) => (
        <div key={index} className="top-3">
          <a href={topNew.url} target="blank">
            <div className="top-3-image-wrapper">
              <img src={topNew.urlToImage} className="top-3-image" alt="img" />
              <small className="news-source">{topNew.source.name}</small>
            </div>

            <div>
              <div className="top-3-headline-title">{topNew.title}</div>
              <div className="top-3-headline-content">
                {topNew.content ? topNew.content.substring(0, 160) + '...' : ''}
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default HomeSideNav;
