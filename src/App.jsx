import { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Cart from './components/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Cart />
    </div>
  )
}

export default App
