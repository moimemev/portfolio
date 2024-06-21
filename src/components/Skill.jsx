import React from 'react'
import { skillText } from '../constants/data'

const Skill = () => {
  return (
    <section id="skill">
      <div className='skill__inner'>
        <h2 className='skill__title'>
          Hye-Suk Kim <span>나의 도전</span>

          <p>
          "사용자 중심 UI/UX에 주력하는"<br/>
          <span>
            사용자와 소통하는 열린 마음을 가진 개발자 <br/>  
            제작자의 의도를 살려 사용자의 편의성을 고려합니다. <br/>  
            '더 매력적으로, 더 편리하게'가 개발 모토입니다.<br/>  
          </span>
          </p>
        </h2>
       
       <div className='skill__desc'>
        {
          skillText.map((skill, key)=>(
            <div key={key}>
              <span>{key + 1}.</span>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </div>
          ))
       }
       </div>
      </div>
    </section>
  )
}

export default Skill