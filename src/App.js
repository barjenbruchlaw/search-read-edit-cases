import React from 'react'
import PageNavBar from './components/PageNavBar.js'
import './bootstrap.min.css'

const App = () => {
  return (
    <div>

      <PageNavBar />

      <main className='page-main'>
        <h1 className='text-center'>Home</h1>

      </main>

    </div>
  )
}

export default App

