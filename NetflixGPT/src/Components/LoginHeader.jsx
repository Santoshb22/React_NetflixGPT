import { getAuth, signOut } from 'firebase/auth';
import React from 'react'
import {useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import netflixlogo from "../assets/netflixlogo.png"
import { CiUser } from "react-icons/ci";
 
const LoginHeader = () => {
const user = useSelector(store => store.user)
const navigate = useNavigate();

const handleSignOut = () => {
  const auth = getAuth();
signOut(auth).then(() => {
  navigate('/')
}).catch((error) => {
  // An error happened.
  navigate('/error')
});
}

  return (
    <div className='absolute  flex justify-between w-[100%] px-3 py-5 bg-gradient-to-t from-transparent to-black bg-opacity-25 '>
        <img className=' w-36 rounded-md ' src={netflixlogo} alt="Logo" />

      <div>
       { user && <div className='flex align items-center gap-4 '>
          <p className='font-bold text-white flex items-center'>
            <CiUser size={28} className='text-white'/>
              {user.displayName}
          </p>
          <button onClick={handleSignOut} className='text-white bg-red-700 py-2 px-4 rounded-md  font-bold'>Sign out</button>
        </div>}
      </div>  
      
    </div>
  )
}

export default LoginHeader