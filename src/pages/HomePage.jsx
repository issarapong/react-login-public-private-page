import React from 'react'
import Header from '../components/Header';
function HomePage() {
  return (
    <>
    <Header />
    <div className='home-list'>
        <ul>
        <li>Coffee</li>
         <li>Tea</li>
         <li>Milk</li>
    </ul>
    </div>
    </>
  )
}

export default HomePage