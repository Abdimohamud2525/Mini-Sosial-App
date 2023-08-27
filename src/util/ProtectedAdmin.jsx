import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UseApp from '../Hooks/useAppGlobal';

const ProtectedAdmin = ({children}) => {

    const {state,dispatch} = UseApp();
    const navigate = useNavigate();
    useEffect(()=>{
        if(!state.auth.isAuthenticated){
            navigate("/Login");
        }
        if(state.auth.currentUser.role !== "admin"){
            navigate("/");
        }
    },[state])

  return (
    <div>{children}</div>
  )
}
export default ProtectedAdmin