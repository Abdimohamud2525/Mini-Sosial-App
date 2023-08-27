import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../appContect';
 const Register = () => {

  const {state,dispatch} = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (event)=>{
    event.preventDefault();

    const newUserData = {
      id : Date.now(),
      username : username,
      password: password,
      email: email,

    }

    dispatch(
      {
        type: "REGISTER_USER",
        payload: newUserData,
      });

      navigate("/Login")
    
  }
  return (
    <div className='max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mt-5 ml-4 sm:ml-10 md:ml-20 flex flex-col bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 shadow-sm gap-2 p-4  justify-center items-center'>

    <h1 className=''>Register</h1>
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
    <button className='rounded-xl  bg-blue-300 w-20 h-10 flex justify-center items-center mt-5  dark:md:hover:bg-fuchsia-600 ' >submit</button>
    </form>
    <Link className='text-blue-50' to = '/Login'>I  have an account</Link>
  </div>
  )
  
}
export default Register;