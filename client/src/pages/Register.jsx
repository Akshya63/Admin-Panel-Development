import { useState } from "react";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";


const Register = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        Password: '',

    })
    const registerUser = async (e) => {
        e.preventDefault();
        const { FirstName, LastName, Email, Password } = data
        try {
            const { data } = await axios.post('/register', {
                FirstName, LastName, Email, Password,
            });
            const responseData = response.data;
            if (responseData.error) {
                toast.error(responseData.error)
            } else {
                setData({})
                toast.success('Login Successful.Welcom!')
                navigate('/login')

            }
        } catch (error) {
            console.log(error)

        }
    }

    return (


        <div className="container-fluid">
            <form className="card w-100" onSubmit={registerUser}>
                <label className='text-primary'>First Name:</label>
                <input className="form-control w-100" type='text' placeholder='Enter First Name..' value={data.FirstName} onChange={(e) => setData({ ...data, FirstName: e.target.value })} />
                <label className='text-primary'>Last Name:</label>
                <input className="form-control w-100" type='text' placeholder='Enter Last Name..' value={data.LastName} onChange={(e) => setData({ ...data, LastName: e.target.value })} />
                <label className='text-primary'>Email:</label>
                <input className="form-control w-100" type='email' placeholder='Enter Email..' value={data.Email} onChange={(e) => setData({ ...data, Email: e.target.value })} />
                <label className='text-primary'>Password:</label>
                <input className="form-control w-100" type='password' placeholder='Enter Password..' value={data.Password} onChange={(e) => setData({ ...data, Password: e.target.value })} /><br/>
                <button type='submit' className="btn btn-primary">Submit</button>
            </form>





        </div>
    )
}

export default Register;

