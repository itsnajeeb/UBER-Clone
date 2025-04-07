import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const {captain, setCaptain} = React.useContext(CaptainDataContext)

  const navigate = useNavigate();


  const SubmitHandler = async (e) => {
    e.preventDefault()
    const captainData = {
      email: email,
      password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData)
    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }

    setEmail('')
    setPassword('')
  }
  return (
    <div className='px-8 py-9 h-screen flex flex-col justify-between'>
      <div className='h-screen flex flex-col  '>
        <img className='w-20  '
          src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="Uber Logo"
        />
        <form className='mt-5' onSubmit={(e) => {
          SubmitHandler(e)
        }}>
          <div className='mb-7'>
            <p className='text-lg font-bold mb-2'>What's your email </p>
            <input type="text"
              value={email}
              onChange={(e) => {
                setEmail((e.target.value))
              }}
              className='bg-gray-200 py-3 rounded-sm w-full px-4 outline-none focus:border-green-400  placeholder:text-sm' placeholder='example@example.com ' />
          </div>

          <div className='mb-7'>
            <p className='text-lg font-bold mb-2'>Password</p>
            <input type="text"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              className='bg-gray-200 py-3 rounded-sm w-full px-4 outline-none focus:border-green-400 placeholder:text-sm' placeholder='Password' />
          </div>

          <button className='bg-black text-base font-bold text-white w-full py-3 rounded-sm'>Login</button>
        </form>

        <p className='text-center text-base mt-4'>Join a fleet ? <Link to='/captain-signup' className='text-blue-400'>Register as a Captain</Link></p>
      </div >



      <Link to='/login' className='bg-[#d5622d] w-full flex rounded-sm font-bold text-white py-3 justify-center'>Sign in as User</Link>
    </div >
  )
}

export default CaptainLogin
