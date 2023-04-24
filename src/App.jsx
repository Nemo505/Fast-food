import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Detail from './components/Foods/Detail';
import CheckOut from './components/Carts/CheckOut';
import 'flowbite';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/detail/:id" element={<Detail />}/>
          <Route path="/checkOut" element={<CheckOut />}/>
          <Route path="*" element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App
