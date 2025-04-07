import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userDataContext } from '../context/UserContext'
import axios from 'axios'



const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const {user, setUser} = useContext(userDataContext);
    const navigate = useNavigate()

    async function SubmitHandler(e) {
        e.preventDefault()

        const loggedInUser = {
            email: email,
            password: password
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, loggedInUser)
        if (response.status = 200) {
            const data = response.data;
            setUser(data.user)
            localStorage.setItem('token',data.token)

        }
        navigate('/home')

        setEmail('')
        setPassword('')

    }
    return (
        <div className='px-8 py-9 h-screen flex flex-col justify-between'>
            <div className='h-screen flex flex-col  '>
                <img className='w-16 '
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo"
                />
                <form className='mt-10' onSubmit={(e) => {
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
                            className='bg-gray-200 py-3 rounded-sm w-full px-4 outline-none focus:border-green-400 placeholder:text-sm' placeholder='Your Password' />
                    </div>

                    <button className='bg-black text-base font-bold text-white w-full py-3 rounded-sm'>Login</button>
                </form>

                <p className='text-center text-base mt-4'>New here ? <Link to='/signup' className='text-blue-400'>Create new Account</Link></p>
            </div >



            <Link to='/Captain-login' className='bg-[#10b461] w-full flex rounded-sm font-bold text-white py-3 justify-center'>Sign in as Captain</Link>
        </div >
    )
}

export default UserLogin
