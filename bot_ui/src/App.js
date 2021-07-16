import React, { useEffect, useState } from 'react'
import './styles.css'
import Chatbot from './Chatbot'
import img1 from './1200px-BMS_College_of_Engineering.png'
export default function App() {
  return (
    
    <div className='App'>
      <div class="split left">
  <div class="centered">
    <img src={img1} alt="Avatar woman" width="200" height="200"/>
    <h2>B.M.S COLLEGE OF ENGINEERING</h2>
    <p class="alt">B.M.S. College of Engineering (BMSCE) was Founded in the year 1946 by Late Sri. B. M. Sreenivasaiah a great visionary and philanthropist and nurtured by his illustrious son Late Sri. B. S. Narayan.</p>
  </div>
</div>

<div class="split right">
  <div class="centered">
    <h2 class="red-text">FINAL YEAR PROJECT</h2>
    <p class="alt1">This is a university chatbot developed by Anvesh,Tejas and Sharlin to solve university related queries of users.</p>
  </div>
</div>
      <Chatbot />
    </div>
  )
}
