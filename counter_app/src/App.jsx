import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
    <h1>Count : {count}</h1>
    <button onClick={() => setCount(count < 20 ? count + 1: count)}><h3>Increment</h3></button>
    <button onClick={() => setCount(count > 0 ? count - 1: count)}><h3>Decrement</h3></button>
    </>
  )
}

export default App
