import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Counter from './components/Counter'
import { DollarConverter } from './components/DollarConverter'
import {Products} from './components/Products'
import {Bmi} from './components/Bmi'

function App() {
  const [count, setCount] = useState(0)

return(
  <>
    <Counter/>
    <DollarConverter/>
    <Products/>
    <Bmi/>
  </>
);
}
export default App
