import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          Let's Build Something Amazing with GPT-3 OpenAI
        </h1>
        <p>
          Amazing AI products can be generated through GPT-3 technology.
           There is a wide range of applications just waiting to be uncovered by you!
            Try us today and open the door to endless opportunities. 
        </p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your email address'/>
          <button type='button'>Get started</button>
        </div>
      </div>
    </div>
  )
}

export default Header