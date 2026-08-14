import { useState } from 'react'
import './App.css'

import ColorBar from './components/ColorBar'
import Button from './components/Button'

function App() {
  const [pageColor, setPageColor] = useState('white')

  return (
    <div
      style={{ backgroundColor: pageColor, minHeight: '100vh' }}
      className="pt-4 transition-colors duration-300"
    >
      <ColorBar>
        <Button color="red" onSelect={setPageColor} />
        <Button color="green" onSelect={setPageColor} />
        <Button color="blue" onSelect={setPageColor} />
        <Button color="olive" onSelect={setPageColor} />
        <Button color="gray" onSelect={setPageColor} />
        <Button color="yellow" onSelect={setPageColor} />
        <Button color="pink" onSelect={setPageColor} />
        <Button color="purple" onSelect={setPageColor} />
        <Button color="lavender" onSelect={setPageColor} />
        <Button color="white" onSelect={setPageColor} />
        <Button color="black" onSelect={setPageColor} />
      </ColorBar>
    </div>
  )
}

export default App
