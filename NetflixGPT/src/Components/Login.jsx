import { useRef, useState } from 'react'
import React from 'react'
import LoginHeader from './LoginHeader'
import { validate2Input,validateForm } from '../utils/validate'

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn)
    }
    const nameValidates = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleLoginButton = () => {
        //validate form inputs
        if (isSignIn) {
            const message = validate2Input(email.current.value, password.current.value)
        setErrorMessage(message);
        } else {
            const message = validateForm(nameValidates.current.value, email.current.value, password.current.value)
        setErrorMessage(message);
        }
    }

  return (
    <div>
        <LoginHeader/>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="Login page background Image" />

        <form onSubmit={(e) => e.preventDefault()} className=" text-white py-12 absolute left-1/3 top-36 login-container bg-black bg-opacity-85  w-[500px] rounded-md">
            <div className="form-cont w-4/5 my-5 mx-20 ">
                <h3 className='text-2xl '> { isSignIn ? "Sign In" : "Sign up" } </h3>

                <div className="signin ">

                    {
                        !isSignIn && (<input ref={nameValidates} className=' block bg-[#333333] w-5/6 my-5 py-3 px-4 rounded-sm '
                        type="text" placeholder='Full Name' />)
                    }

                    <input ref={email} className=' bg-[#333333] block w-5/6 my-5 py-3 px-4 rounded-sm '
                    type="text" placeholder='Email/Mobile Number' />
                    <input ref={password} className=' bg-[#333333] block w-5/6 my-5 py-3 px-4 rounded-sm'
                    type='password' placeholder='Password' />

                     
                    <p className='text-red-500'>{errorMessage}</p>

                    <button onClick={handleLoginButton}
                     className='bg-red-700 w-5/6 my-5 py-3 px-4 rounded-sm'
                    > {isSignIn ? "Sign In" : "Sign up" }</button>
                </div>

                <div className="signin-opt w-4/5 my-5 cursor-pointer">
                <p className='mt-6' onClick={toggleSignInForm}>
                    {
                        isSignIn? "New to Netflix? Sign up" : "Already Registered Sign in Now"
                    }
                </p>

                <p className='my-6 text-xs'>
                Sign in is protected by Google reCAPTCHA to ensure you’re not a bot. 
                <br/> <br/>
                The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).
                </p>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Login