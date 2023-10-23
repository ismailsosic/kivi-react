import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import { React, useEffect, useState } from 'react';
import CategoryPage from './CategoryPage';
import LandingPage from './LandingPage';
import FiltersPage from './FiltersPage';
import LocationPage from './LocationPage';
import EmailPage from './EmailPage';
import CongratsPage from './CongratsPage';
import LinkR from '../data/routes';
  

function App() {

  // const info = 'Dobrodosli na stranicu kivi!'
  const [data, setData] = useState({})

  useEffect(() => {
    console.log(data)
  }, [data])


  return (
    <div className="App">
      <Router>
        <Routes>
        
          <Route path='/' element={<LandingPage />} />
          <Route path='category' element={<CategoryPage data={{data, setData}} routes={LinkR.category} />}/>
          <Route path='filters' element={<FiltersPage data={{data, setData}} routes={LinkR.filters}/>}/>
          <Route path='location' element={<LocationPage data={{data, setData}} routes={LinkR.location}/>}/>
          <Route path='email' element={<EmailPage data={{data, setData}} routes={LinkR.email} />}/>
          <Route path='congrats' element={<CongratsPage data={{data, setData}} routes={LinkR.congrats} />}/>
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;