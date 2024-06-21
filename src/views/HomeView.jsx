import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Intro from '../components/Intro'
import Coding from '../components/Coding'
import Skill from '../components/Skill'
import Port from '../components/Port'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Site from '../components/Site'
//import 이름 : 이름은 변경가능함

//모둠파일
const HomeView = () => {
  return (
    <div className='wrap'>
       <Header />
       <Main>
            <Intro />
            <Skill/>
            <Site />
            <Port />
            <Contact />
       </Main>
       <Footer />
    </div>
  )
}

export default HomeView