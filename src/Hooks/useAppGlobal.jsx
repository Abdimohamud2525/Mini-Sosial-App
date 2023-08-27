import { useContext } from "react"
import { GlobalContext } from "../../appContect"

const UseApp = ()=>{
    const context = useContext(GlobalContext);

    if(context === undefined){
        throw new Error("context is undefined")
    }

    return context;
}
export default UseApp;