import React from 'react'

import { siteText } from '../constants/data'

const Site = () => {
  return (
    <section id="site">
      <div className="site__inner">
        <h2 className="site__title">
          Site <em>나의 작업물</em>
        </h2>
        <div className="site__wrap">
          {siteText.map((site, key) => (
            // s1,s2,s2
            <article className={`site__item s${key + 1}`} key={key}>
              <span className="num">{key + 1}.</span>
              <div className="text">
                <div>{site.text[0]}</div>
                <div>{site.text[1]}</div>
                <div>{site.text[2]}</div>
              </div>
              <h3 className="title">
                {site.title}
              </h3>
              <div className="btn">
                <a href={site.figma} target="_blank">기획서보기</a>&nbsp;
                <a href={site.code} target="_blank">코딩보기</a>&nbsp;
                <a href={site.view} target="_blank">사이트보기</a>
              </div>
              <div className="info">
                <span>{site.info[0]}</span>
                <span>{site.info[1]}</span>
                <span>{site.info[2]}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Site;