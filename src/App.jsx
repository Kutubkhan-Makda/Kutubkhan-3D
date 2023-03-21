import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover'></div>
      </div>
    </BrowserRouter>
  )
}

export default App