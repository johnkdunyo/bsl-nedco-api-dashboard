import React from 'react'
import Header from '../Components/Header'
import MainScreen from '../Components/MainScreen'
import Sidebar from '../Components/Sidebar'

const Home = () => {
  return (
    <React.Fragment>
        <div className='flex'>
        <Sidebar />
        <div className='w-full'>
            <Header />
            <MainScreen />
        </div>
        
        
        </div>
        
    </React.Fragment>
  )
}

export default Home