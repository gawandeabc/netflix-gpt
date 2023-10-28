import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import {auth} from "../utils/firebase";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null)
    const email = useRef(null);
    const password = useRef(null);
    const handleButtonClick =()=>{
        //validate the form data
        const message = checkValidData(email.current.value,password.current.value);
        setErrorMessage(message);
        if(message) return;
        if(!isSignInForm){
            //sign up
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
             // ...
             })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+ "_" +errorMessage)
              });
        }
        else{
            //sign In
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+ "_" +errorMessage)
             });
        }
    }
    const  toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
  return (
    <div>
        <Header/>
       <div className='absolute'>
       <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="logo" />
       </div>
        <form onSubmit={(e)=>e.preventDefault() } className='text-white absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In": "Sign Up"}</h1>
            
            {!isSignInForm && <input 
            type="text" placeholder='Full Name' 
            className='p-4 my-4 w-full bg-gray-600'/>
            }
            <input 
            ref={email}
            type="text" placeholder='Email Address' 
            className='p-4 my-4 w-full bg-gray-600'/>
            
            <input 
            ref={password}
            type="Password" placeholder='Password' 
            className='p-4 my-4 w-full bg-gray-600'/>
            
            <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

            <button onClick={handleButtonClick}
            className='p-4 my-6 bg-red-600 w-full rounded-lg'>
            {isSignInForm ? "Sign In": "Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix? Sign up Now": "Already registered? Sign In now"}</p>
        </form>
    </div>
  )
}

export default Login