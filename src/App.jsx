import React from 'react'
import './App.css'
import Layout from './components/Layout'
import Home from './components/Home'


function App() {
  return (
    <React.Fragment>    
      <Layout>
        <Home/>
      </Layout>
    </React.Fragment>
  )
}

export default App