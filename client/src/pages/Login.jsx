import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate()
    const [data, setData] = useState({
        Email: '',
        Password: '',

    })
    const loginUser = async (e) => {
        e.preventDefault()
        const { Email, Password } = data
        try {
            const { data } = await axios.post('/login', {
                Email,
                Password

            });
            if (data.error) {
                toast.error(data.error)
            } else {
                setData({});
                navigate('/dashboard')

            }


        } catch (error) {

        }

    }
    return (
        <div>
            <form className="card w-100" onSubmit={loginUser}>
                <label className='text-primary '>Email</label>
                <input className="form-control w-100" type='email' placeholder='Enter Email..' value={data.Email} onChange={(e) => setData({ ...data, Email: e.target.value })} />
                <label className='text-primary '>Password</label>
                <input className="form-control w-100" type='password' placeholder='Enter Password..' value={data.Password} onChange={(e) => setData({ ...data, Password: e.target.value })} /><br/>
                <button className="btn btn-primary" type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login;
