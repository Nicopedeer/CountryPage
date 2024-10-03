import { useState } from 'react'
import './App.css'
import CountriesAvailable from './CountriesAvailable/CountriesAvailable'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CountryData from './CountryData/CountryData'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<CountriesAvailable/>}/>
      <Route exact path='/:id' element={<CountryData/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
