import React, { useState } from 'react'
import logo from '@/logo.svg'
import { Button } from 'antd'

import '@/App.css'

function App() {
  const [count, setCount] = useState(0)

  console.log('import.meta.env', import.meta.env) 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React + AntD!</p>
        <p>
          <Button type="primary" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
      </header>
    </div>
  )
}

export default App
