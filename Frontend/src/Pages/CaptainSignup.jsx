import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setCaptainData] = useState({})
  const submiteHandler = (e) => {
    e.preventDefault();

    setCaptainData({
      fullName: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password
    })

    console.log(captainData);

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  }
  return (
    <div className='px-8 py-9 h-screen flex flex-col justify-between'>
      <div className='h-screen flex flex-col  '>
        <img className='w-16 '
          src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="Uber Logo"
        />
        <form className='mt-5' onSubmit={(e) => {
          submiteHandler(e)
        }} >
          <div className='mb-6'>
            <p className='text-lg font-bold mb-2'>what's our captain's name</p>
            <div className='flex gap-4'>
              <input type="text"
                value={firstname}
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
                className='bg-gray-200 py-3 rounded-sm w-1/2 px-4 outline-none focus:border-green-400  placeholder:text-sm' placeholder='First Name ' />
              <input type="text"
                value={lastname}
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
                className='bg-gray-200 py-3 rounded-sm w-1/2 px-4 outline-none focus:border-green-400  placeholder:text-sm' placeholder='Last Name' />
            </div>
          </div>

          <div className='mb-6'>
            <p className='text-lg font-bold mb-2'>What's our captain's email </p>
            <input type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              className='bg-gray-200 py-3 rounded-sm w-full px-4 outline-none focus:border-green-400  placeholder:text-sm' placeholder='example@example.com ' />
          </div>

          <div className='mb-6'>
            <p className='text-lg font-bold mb-2'>Password</p>
            <input type="text"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              className='bg-gray-200 py-3 rounded-sm w-full px-4 outline-none focus:border-green-400 placeholder:text-sm' placeholder='example@example.com' />
          </div>

          <button className='bg-black text-base font-bold text-white w-full py-3 rounded-sm'>Login</button>
        </form>

        <p className='text-center text-base mt-4'> Already have an account? <Link to='/captain-login' className='text-blue-400'>Login here</Link></p>
      </div >


      <p className='text-xs'>By proceeding, you consent to receiving calls, WhatsApp or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
      {/* <Link to='/Captain-login' className='bg-[#10b461] w-full flex rounded-sm font-bold text-white py-3 justify-center'>Sign in as Captain</Link> */}
    </div >
  )
}

export default CaptainSignup
