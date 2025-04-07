import React from 'react'
import { Link } from 'react-router-dom'
import UserLogin from './UserLogin'

const Start = () => {
    return (
            <div className='h-screen w-full pt-8 flex justify-between flex-col text-white bg-red-400
                bg-cover bg-center bg-no-repeat bg-fixed bg-[url(https://images.unsplash.com/photo-1527603815363-e79385e0747e?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]
                '>

                <img className='w-16 ml-8  '
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo" 
                />

                <div className='bg-white text-black flex justify-center flex-col  py-5 px-4 text-center'>
                    <h1 className='text-3xl font-bold '>Get Started With Uber</h1>
                    <Link to='/login' className='bg-black py-3 rounded-md  text-white text-xl mt-4'>Continue</Link>
                </div>
            </div>
    )
}

export default Start
