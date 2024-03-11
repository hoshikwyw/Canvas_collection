import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../pages/Main'
import AnimationContext from '../pages/AnimationContext'
import InteractionOnCanvas from '../pages/InteractionOnCanvas'

const Path = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/animation' element={<AnimationContext />} />
        <Route path='/interaction' element={<InteractionOnCanvas />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Path
