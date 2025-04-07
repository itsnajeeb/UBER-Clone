import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainSignup = () => {

  const navigate = useNavigate();

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');


  const { captain, setCaptain } = React.useContext(CaptainDataContext)

  const submiteHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)
    if (response.status === 201) {
      const data = response.data
      //console.log(data);
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setVehicleColor('')
    setVehicleCapacity('')
    setVehiclePlate('')
    setVehicleType('')


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
              className='bg-gray-200 py-3 rounded-sm w-full px-4 outline-none focus:border-green-400  placeholder:text-sm' placeholder='example@gmail.com ' />
          </div>

          <div className='mb-6'>
            <p className='text-lg font-bold mb-2'>Password</p>
            <input type="text"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              className='bg-gray-200 py-3 rounded-sm w-full px-4 outline-none focus:border-green-400 placeholder:text-sm' placeholder='Password' />
          </div>

          <div className='mb-6'>
            <p className='text-lg font-bold mb-2'>Vehicle Information</p>
            <div className='w-full flex gap-4 mb-4'>
              <input type="text"
                value={vehicleColor}
                onChange={(e) => {
                  setVehicleColor(e.target.value)
                }}
                className='bg-gray-200 py-3 rounded-sm w-2/4  px-4 outline-none focus:border-green-400 placeholder:text-sm' placeholder='Vehicle Color' />

              <input type="text"
                value={vehiclePlate}
                onChange={(e) => {
                  setVehiclePlate(e.target.value)
                }}
                className='bg-gray-200 py-3 rounded-sm w-2/4 px-4 outline-none focus:border-green-400 placeholder:text-sm' placeholder='Vehicle Plate' />

            </div>

            <div className='w-full flex gap-4 '>
              <input type="text"
                value={vehicleCapacity}
                onChange={(e) => {
                  setVehicleCapacity(e.target.value)
                }}
                className='bg-gray-200 py-3 rounded-sm w-2/4 px-4 outline-none focus:border-green-400 placeholder:text-sm' placeholder='Vehicle Capacity' />

              <select value={vehicleType}
                onChange={(e) => {
                  setVehicleType(e.target.value)
                }}
                className='bg-gray-200 py-3 rounded-sm w-2/4 px-4 outline-none focus:border-green-400 placeholder:text-sm'>
                <option disabled>Select Vehicle Type</option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="moto">Moto</option>
              </select>
            </div>
          </div>

          <button className='bg-black text-base font-bold text-white w-full py-3 rounded-sm'>Create Account</button>
        </form>

        <p className='text-center text-base mt-4'> Already have an account? <Link to='/captain-login' className='text-blue-400'>Login here</Link></p>
      </div >


      <p className='text-xs'>By proceeding, you consent to receiving calls, WhatsApp or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
      {/* <Link to='/Captain-login' className='bg-[#10b461] w-full flex rounded-sm font-bold text-white py-3 justify-center'>Sign in as Captain</Link> */}
    </div >
  )
}

export default CaptainSignup
