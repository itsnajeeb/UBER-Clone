import React from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
    return (
        <div className='px-8 py-9 h-screen flex flex-col justify-between'>
            <div className='h-screen flex flex-col  '>
                <img className='w-16 '
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo"
                />
                <form className='mt-10'>
                    <div className='mb-7'>
                        <p className='text-lg font-bold mb-2'>What's your email </p>
                        <input type="text" className='bg-gray-200 py-3 rounded-sm w-full px-4 outline-none focus:border-green-400  placeholder:text-sm' placeholder='example@example.com ' />
                    </div>

                    <div className='mb-7'>
                        <p className='text-lg font-bold mb-2'>Password</p>
                        <input type="text" className='bg-gray-200 py-3 rounded-sm w-full px-4 outline-none focus:border-green-400 placeholder:text-sm' placeholder='example@example.com' />
                    </div>

                    <button className='bg-black text-base font-bold text-white w-full py-3 rounded-sm'>Login</button>
                </form>

                <p className='text-center text-base mt-4'>New here ? <Link to='/signup' className='text-blue-400'>Create new Account</Link></p>
            </div >



            <Link to='/CaptainLogin' className='bg-[#10b461] w-full flex rounded-sm font-bold text-white py-3 justify-center'>Sign in as Captain</Link>
        </div >
    )
}

export default UserLogin
