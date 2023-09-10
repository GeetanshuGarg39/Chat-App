import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Message from './Message'

const ChatArea = () => {
  return (
    <div class="translate-x-0-x-full lg:translate-x-0 fixd inset-0 lg:relative lg:inset-auto flex flex-col grow border-x border-gray-100 bg-white z-10 transition">
      <Header/>   
      <Message/>   
      <Footer/>  
    </div>
  )
}

export default ChatArea
