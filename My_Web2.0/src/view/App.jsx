import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className = "buttom">
          <buttom onClick={() => setCount(count + 1)}>
            count: {count}
          </buttom>
      </div>
    </>
  )
}

export default App
