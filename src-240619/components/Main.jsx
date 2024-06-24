import React from 'react'

//자식 보여주기 설정 { children }
const Main = ({ children }) => {
  return (
    <main id='main' >      
      {children}
    </main>
  )
}

export default Main