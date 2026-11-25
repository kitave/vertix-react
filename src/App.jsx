import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Counter from './components/Counter'
import { DollarConverter } from './components/DollarConverter'
import {Products} from './components/Products'
import {Bmi} from './components/Bmi'
import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import {NavBar} from "./components/NavBar.jsx";

function App() {
  const [count, setCount] = useState(0)

return(
  <>
      <BrowserRouter>
          <NavBar/>
          <Routes>
              <Route path = "/" element = {<Home/>}/>
              <Route path = "/about" element = {<About/>}/>
              <Route path = "/services" element = {<Services/>}/>
              <Route path = "*" element = {<NotFound/>}/>
          </Routes>
      </BrowserRouter>
    {/*<Counter/>*/}
    {/*<DollarConverter/>*/}
    {/*<Products/>*/}
    {/*<Bmi/>*/}
  </>
);
}
export default App


//npm install react-router