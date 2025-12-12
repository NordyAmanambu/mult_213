import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Tracking a COUNT value (data context, application state, model concerns)

  // count: current value
  // setCount: function to update the value of count
  const [count, setCount] = useState(1)

  // If that number ever changes, do this logic
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h1>{count}</h1>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
