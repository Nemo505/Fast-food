import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Foods/Detail';
import CheckOut from './components/Carts/CheckOut';
import Login from './auth/Login';
import Register from './auth/Register';
import 'flowbite';

function App() {
  
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/detail/:id" element={<Detail />}/>
          <Route path="/checkOut" element={<CheckOut />}/>
          <Route path="*" element={<Home />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App
