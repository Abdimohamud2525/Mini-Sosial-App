import { createContext, useReducer } from "react";
import globalReducer, { initialSate } from "./src/assets/appReducer";

export const GlobalContext = createContext();

export const GlobalProvider = ({children})=>{

    const[state,dispatch] = useReducer(globalReducer, initialSate);
    return(
        <GlobalContext.Provider value={{state,dispatch}}>

            {children}
        </GlobalContext.Provider>
    )
}