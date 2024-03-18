import React from 'react'
import Home from './Pages/Home'
import Navbaar from './Pages/Navbaar'
// import {image} from "./Components/Image.json"
import { image } from './Components/Images'

function App() {
  return (
    <div>
    <Navbaar />
      <Home images={image} />
    </div>
  )
}

export default App
