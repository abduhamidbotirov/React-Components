import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import InputField from '../Input/InputField'; // InputField komponentini import qiling
import Button from '../Button/Button';
const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate(); // useNavigate hooki

    const { email, password } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', { email, password });
            console.log('Login Successful', response.data);
            // Istalgan qilingan muvaffaqiyatli kiritishdan so'ng, kerakli sahifaga o'ting
            navigate('/');
        } catch (error) {
            console.error('Login Error', error);
        }
    };

    return (
        <div className='login w-50 mx-auto'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="form-control py-2 w-100">
                {/* InputField komponentlarini ishlatish */}
                <InputField
                    label="Email"
                    type="email"
                    className="form-control p-2 mb-2"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    required
                />
                <InputField
                    className="form-control p-2 mb-2"
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    required
                />
                <Button type="submit" text="Login"className="form-control mt-2 btn-info btn p-3  text-light" />
            </form>
            <p>
                Dont have an account? <Link to="/register">Register</Link>
            </p>
            <p>
                <Link to="/forgot-password">Forgot Password?</Link>
            </p>
        </div>
    );
};

export default Login;
