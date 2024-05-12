import { useState } from 'react'
import User from './User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <User/>
    </>
  )
}

export default App
