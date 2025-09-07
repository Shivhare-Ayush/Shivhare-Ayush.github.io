//import React from 'react'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import Header from '../components/Header'
import ClickSpark from '../components/ClickSpark.tsx'
const Page1 = () => {
  

  return (
    <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
    >
      
    <div className='h-max w-full max-w-full lg:flex relative justify-between lg:px-12 py-24 px-10'>
      <Sidebar />
      <Header />
      <Content />
    </div>
    </ClickSpark>
  )
}

export default Page1
