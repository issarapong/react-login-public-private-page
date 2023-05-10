import React from 'react'
import Header from '../components/Header';
function ProfilePage() {
  return (
    <>
    <Header />
    <div className='container'>
     <div className='profile'>
    <img src="https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY" />
    <p>name</p>
    </div>
    </div>
    </>
  )
}

export default ProfilePage