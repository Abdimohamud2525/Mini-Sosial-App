import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../appContect';

 const Login = () => {

  const {state,dispatch} = useContext(GlobalContext)
  const [username, setUsername] =useState("maxamud")
  const [password, setPassword] = useState("1234")
  const navigate = useNavigate()


  const handleSubmit = (event)=>{
    event.preventDefault();
    dispatch(
      {
        type: 'LOGIN',
        payload: {username , password}

      })
      if(state.auth.authError){
        alert("username and password are invalid")
      }else{
        console.log("correct")
        navigate("/")
      }
  }
  return (
    <div className='max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mt-5 ml-4 sm:ml-10 md:ml-20 flex flex-col bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 shadow-sm gap-2 p-4  justify-center items-center'>

    <h1 className=''>Login</h1>
    <form onSubmit={handleSubmit}>
      <div className=''>
        <label htmlFor=''>Username</label>
        <input className='rounded-lg border-separate  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30%' type='text' name='username mb-10' placeholder='enter username'  value = {username} 
        onChange={(event) => setUsername(event.target.value)}/>
      </div>
      <div className='space-y-5'>
        <label htmlFor=''>password</label>
        <input  className='rounded-lg border-separate bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30%' type='password' name='password ' placeholder='enter password' value = {password}
          onChange={(event) => setPassword(event.target.value)}/>
      </div>
    <button className='rounded-xl  bg-blue-300 w-20 h-10 flex justify-center items-center mt-5 ' >submit</button>
    </form>
    <Link className='text-blue-50' to = '/Register'>I dont have any account</Link>
  </div>
  )
}
export default Login;