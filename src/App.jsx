import { useId, useState } from 'react'
import './App.css'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)
  const id = useId();

  return (
    <Home/>
  )
}

export default App
