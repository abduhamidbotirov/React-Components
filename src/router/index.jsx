import { Route, Routes } from 'react-router-dom';
import Login from '../components/Auth/Login'; // Fayl nomi "Login" bo'lishi kerak
import Register from '../components/Auth/Register'; // Fayl nomi "Register" bo'lishi kerak
import ForgotPassword from '../components/Auth/ForgetPass';
import ReciveCard from '../components/Card/ReciveCard';

const Index = () => {
    return (
        <>
            <Routes>
                <Route path="/cards" element={<ReciveCard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
        </>
    );
};

export default Index; // Komponent nomi "Index" bo'lishi kerak
