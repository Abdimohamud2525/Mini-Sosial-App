
import { useContext, useState } from "react"
import { GlobalContext } from "../appContect"
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useEffect } from "react";

function App() {

  const [user, setUser] = useState("");

  useEffect(()=> {
    document.title = user ? `${user}  "feed" ` : "Please Login"
  }, [user])

  const state = useContext(GlobalContext);
 
  return (
    <>
   <Header/>
      <Outlet/>
    </>
  )
}

export default App
