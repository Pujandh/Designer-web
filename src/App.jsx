import { useState } from 'react'
import './App.css';
import Homepage from './component/Homepage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Aboutus from './Pages/Aboutus';
import Contactus from './Pages/Contactus';
import Trending from './Pages/Trending'; 
import Explorework from './Pages/Explorework';
import Navbar from './component/Navbar';
import ScrollToTop from './component/ScrollToTop';

function App() {
  const [count, setCount] = useState(0);

  return (
    
 <>  
  <BrowserRouter>
  <ScrollToTop/>
  <Navbar/>
  <Routes>
    
    <Route path="/" element = {<Homepage/>}></Route>
    <Route path = 'aboutus' element = {<Aboutus/>}></Route>
    <Route path = 'contactus' element = {<Contactus/>}></Route>
    <Route path = 'explorework' element = {<Explorework/>}></Route>
    <Route path = 'trending' element = {<Trending/>}></Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
