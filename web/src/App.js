import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

export default function Haha() {

}

export const App = a => {
  if (a === 2) {
    const [value] = useState(1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
and save to reload.
          <div><div /></div>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

