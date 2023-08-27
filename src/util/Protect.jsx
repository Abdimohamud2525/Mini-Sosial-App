import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UseApp from '../Hooks/useAppGlobal';

const Protect = ({children}) => {

    const {state,dispatch} = UseApp();
    const navigate = useNavigate();
    useEffect(()=>{
        if(!state.auth.isAuthenticated){
            navigate("/Login");
        }
    },[state])

  return (
    <div>{children}</div>
  )
}
export default Protect