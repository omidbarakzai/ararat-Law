
import {  Routes, Route } from "react-router-dom";

import Home from './component/Home'
import Form from './component/form'
import Navbar from './component/Navbar'
import Pooter from './component/Pooter'
import Criminal from './pages/Criminal'
import Contract from './pages/Contract'
import Commercial from './pages/Commercial'
import Family from './pages/Family'

import './App.css'
import 'animate.css';


function App() {
  

  return (
    <>     
        <Navbar />
      <Routes>
           <Route path='/'       element={ <Home /> }/> 
           <Route path='/form'   element={<Form  />}/>
          <Route path='/footer'  element={<Pooter />} />
          <Route path='/Navbar'  element = { <Navbar /> }/>
          <Route path="/AboutUs" element = {<AboutUs/>} />
          <Route path='/مشاوره-حضوری-و-تلفنی-پرونده-های-کیفری' element = {<Criminal/>} />
          <Route path='/دعاوی ملکی و قرار دادی' element={<Contract />} />
           <Route path='' element = {<Commercial />} /> 
           <Route path="/family-lawyers" element = {<Family/>} />
           
      </Routes>
    </>

  )
}

export default App
