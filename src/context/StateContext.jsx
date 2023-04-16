import { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

export const StateContextProvider = ({children}) => {
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
    const data = {appDrinks, setAppDrinks}
    return(
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
       
}

export const StateContextCustom = () => useContext(StateContext)