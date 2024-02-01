import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [signInForm, setSignInForm] = useState(true)

  const toggleSignUp = () => {
    setSignInForm(!signInForm)
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img 
        src='https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_small.jpg'
        alt='bg-img'/>

      </div>
      <form className='absolute w-3/12 p-12 bg-black text-white my-36 mx-auto left-0 right-0 bg-opacity-80'>
        <h1 className='font-bold text-3xl p-4'>{signInForm ? "Sign In" : "Sign Up"}</h1>
        {!signInForm && (
          <input type='text' placeholder='Full Name' className='p-2 m-2 w-full rounded bg-gray-700'/>
        )}
        <input type='text' placeholder='Email Address ' className='p-2 m-2 w-full rounded bg-gray-700'/>
        <input type='password' placeholder='Password ' className='p-2 m-2 w-full rounded bg-gray-700'/>
        <button className='p-2 m-2 font-semibold bg-red-700 w-full rounded-sm '>{signInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignUp}>{signInForm ? "New to Netflix Sign Up now" : "Already a User Sign In now"}</p>
      </form>
    </div>
  )
}

export default Login