import React from 'react'
import webImages from '../Images/Web-Dev-Blog.png'
function Home() {
  return (
<div class="alert alert-primary" role="alert">
    <img src="/images/rahmaa.jpg" alt="my-photo" className='avatar' />
    <h1>Rahma Hamza</h1>
     <h2 className='text'>Hello My name is Rahma. I am a fullstack developer</h2>
    <img src={webImages} alt="web-Dev" />
      </div>

  )
}

export default Home