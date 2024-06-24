import React from 'react'
import about from '../assets/img/about.png'
import { introText } from '../constants/data'

const Intro = () => {
  console.log(introText);
  console.log(introText.title);
  console.log(introText.title.length);
  console.log(introText.desc[0]);

  for(const item of introText.desc ){
    console.log(item)
  }

  let str = introText.title;
  console.log(str);

  let words = str.split(',',3);
  console.log(words);

  return (
    <section id="intro">
        <div className='intro__inner'>
          <h2 className='intro__title'>
            {/* {words[0]}<br/>
            {words[1]}<br/>
            {words[2]} */}

            {
              words.map((word,idx)=><div key={idx}>{word}</div>)
            }
          </h2>

            {/* line drawing */}
          <div className="intro__lines" aria-hidden="true">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>

          <div className="intro__text">
            <div className='text'>
              <p>{introText.desc[0]}</p>
              <p>{introText.desc[1]}</p>
              <p>{introText.desc[2]}</p>
            </div>
            <div className='img'>
              <img src={about} alt="about" />
            </div>
          </div>
        </div>        
        
        {/* line drawing */}
        <div className="intro__lines bottom" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

    </section>
  )
}

export default Intro