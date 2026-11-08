import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
        <h1>Welcome to k8s</h1>
        <p>React + TypeScript + Vite running inside Kubernetes!</p>

        <div style={{ margin: '20px' }}>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>

        <p style={{ color: '#666', fontSize: '14px' }}>
          Edit <code>src/App.tsx</code> and save to test updates.
        </p>
      </div>
  )
}

export default App