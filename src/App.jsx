import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Detail from './components/Foods/Detail';
import CheckOut from './components/CheckOut';
import { useEffect, useState } from 'react';


function App() {
  const [appDrinks, setAppDrinks] = useState([]);
  useEffect(() => {
    navAppData();
  }, []);

  const navAppData = async() => {
    await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        setAppDrinks(data.drinks);
    })
    .catch((err) => {
        console.log(err.message);
    });
  }

  return (
    <div className="App">
      <Navbar setAppDrinks={setAppDrinks} appDrinks={appDrinks} />
      <Routes>
          <Route path="/" element={<Home appDrinks={appDrinks} />}/>
          <Route path="/detail/:id" element={<Detail />}/>
          <Route path="/checkOut" element={<CheckOut />}/>
          <Route path="*" element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App
