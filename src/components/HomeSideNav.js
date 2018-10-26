import React from 'react';

const HomeSideNav = ({ otherTopNews }) => {
  return (
    <div>
      {otherTopNews.map((topNew, index) => (
        <div key={index} className="other-top-news">
          <a href={topNew.url} target="blank">
            <div className="other-top-news-headline-title">{topNew.title}</div>

            <div className="other-top-news-headline-content">
              {topNew.content ? topNew.content.substring(0, 100) + '...' : ''}
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default HomeSideNav;
