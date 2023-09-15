import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import InputField from '../Input/InputField';
import Button from '../Button/Button';
const ForgotPassword = () => {
    const [formData, setFormData] = useState({
        email: '',
        newPassword: '',
        confirmNewPassword: '',
    });
    const { email, newPassword, confirmNewPassword } = formData;
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Parolni tasdiqlash logikasi
            if (newPassword !== confirmNewPassword) {
                console.error("Passwords don't match.");
                return;
            }
            const response = await axios.post('/api/forgot-password', {
                email,
                newPassword,
            });
            console.log('Password Reset Successful', response.data);
        } catch (error) {
            console.error('Password Reset Error', error);
        }
    };
    return (
        <div className='forget w-50 mx-auto'>
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit} className='form-control py-2 w-100'>
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
                    label="New Password"
                    type="password"
                    name="newPassword"
                    className="form-control p-2 mb-2"
                    value={newPassword}
                    onChange={handleChange}
                    required
                />
                <InputField
                    label="Confirm New Password"
                    type="password"
                    name="confirmNewPassword"
                    className="form-control p-2 mb-2"
                    value={confirmNewPassword}
                    onChange={handleChange}
                    required
                />
                <Button type="submit" text="Reset Password" className="form-control mt-2 btn-info btn p-3 text-light" />
            </form>
            <p>
                Remembered your password? <Link to="/login">Login</Link>
            </p>
        </div>
    );
};

export default ForgotPassword;
