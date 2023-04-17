import { createContext, useContext, useState, useEffect, useReducer } from "react";
import { reducer } from "./Reducer";

const StateContext = createContext();

export const StateContextProvider = ({children}) => {

    //api call for all lists
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
    //Cart Count     
    const initialState = {
        drinks: [],
        carts: []
    }
    
    useEffect(() => {
        dispatch({type:"ALL_DRINKS", payload:appDrinks});
    }, [appDrinks]);

    const [state, dispatch] = useReducer(reducer, initialState);
    const data = {state, dispatch, setAppDrinks}

    return(
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
       
}

export const StateContextCustom = () => useContext(StateContext)