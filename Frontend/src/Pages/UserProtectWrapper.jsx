import React, { useContext, useEffect, useState } from 'react'
import { userDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const UserProtectWrapper = ({ children }) => {
    const token = localStorage.getItem('token')
    const { user, setUser } = React.useContext(userDataContext)
    const [isLoading, setIsLoading] = useState(true)

    const navigate = useNavigate()
    useEffect(() => {
        if (!token) {
            navigate('/login')
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if (response.status === 200) {
                //console.log(response.data);
                setUser(response.data)
                setIsLoading(false)
            }
        }).catch(err => {
            console.log(err);
            localStorage.removeItem('token');
            navigate('/login')

        });
    }, [token,navigate,setUser])
    if (isLoading) {
        return (
            <div>
                Loading....
            </div>
        )
    }
    return (
        <div>
            {children}
        </div>
    )
}

export default UserProtectWrapper
