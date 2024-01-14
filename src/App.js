import React from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import Banner from './components/banner/Banner'
import RowPost from './components/RowPost/RowPost'
import { actions,originals } from './Urls'


function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={actions} title='Action' isSmall/>

    </div>
  )
}

export default App
