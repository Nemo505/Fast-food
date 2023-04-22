import { createContext, useContext, useState, useEffect, useReducer } from "react";
import { reducer } from "./Reducer";

const StateContext = createContext();

export const StateContextProvider = ({children}) => {
    
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [drinkDetail, setDrinkDetail] = useState({});

    //api call for all lists
    const [appDrinks, setAppDrinks] = useState([]);
    useEffect(() => {
        navAppData();
    }, []);


    const navAppData = async() => {
        await fetch('https://api.spoonacular.com/recipes/random?apiKey=85641bf6e4024052a48dffb41b6dde93&number=10')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setAppDrinks(data.recipes);
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
    const data = {state, dispatch, setAppDrinks, isMenuToggled, setIsMenuToggled, drinkDetail, setDrinkDetail}

    return(
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
       
}

export const StateContextCustom = () => useContext(StateContext)