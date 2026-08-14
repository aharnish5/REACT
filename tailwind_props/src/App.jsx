import { useState } from 'react'
import './App.css'

import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-red-500 hover:bg-red-400'>Hello! React.</h1>
    <Card username="_aharnish_" designation="Programmer Analyst" imgSrc='https://avatarfiles.alphacoders.com/604/60402.jpg'></Card>
    <Card></Card>
    </>
  )
}

export default App
