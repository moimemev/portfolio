import React from 'react'
import { codingText } from '../constants/data'

const Coding = () => {
  return (
    <section id="coding">
      <div className='coding__inner'>
        <h2 className='coding__title'>
          Hye Suk Kim <span>나의 도전</span>

          <p>
          "사용자 중심 UI/UX"<br/>
          <span>
          에 주력하는 사용자와 소통하는 열린 마음을 가진 개발자<br/>  
          제작자의 의도를 살려 사용자의 편의성을 고려합니다<br/>  
          '더 매력적으로, 더 편리하게'가 개발 모토입니다.<br/>  
          </span>
          </p>
        </h2>
       
       <div className='coding__desc'>
        {
          codingText.map((coding, key)=>(
            <div key={key}>
              <span>{key + 1}.</span>
              <h3>{coding.title}</h3>
              <p>{coding.desc}</p>
            </div>
          ))
       }
       </div>
      </div>
    </section>
  )
}

export default Coding