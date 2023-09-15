import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import InputField from '../Input/InputField';
import Button from '../Button/Button';
const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const { username, email, password } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/register', {
                username,
                email,
                password,
            });
            console.log('Registration Successful', response.data);
            navigate('/login'); // Muvaffaqiyatli ro'yxatdan o'tishdan so'ng login sahifasiga o'ting
        } catch (error) {
            console.error('Registration Error', error);
        }
    };

    return (
        <div className='register w-50 mx-auto'>
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className="form-control w-100 py-2">
                <InputField
                    label="Username"
                    type="text"
                    name="username"
                    value={username}
                    className="form-control p-2 mb-2"
                    onChange={handleChange}
                    required
                />
                <InputField
                    label="Email"
                    type="email"
                    name="email"
                    className="form-control p-2 mb-2"
                    value={email}
                    onChange={handleChange}
                    required
                />
                <InputField
                    label="Password"
                    type="password"
                    name="password"
                    className="form-control p-2 mb-2"
                    value={password}
                    onChange={handleChange}
                    required
                />
                <Button type="submit" text="Register" className="form-control mt-2 btn-info btn p-3  text-light" />
            </form>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    );
};

export default Register;
