import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout";
import LoginForm from "../pages/login";
import RegisterForm from "../pages/registerform";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import SelectedTrips from "../pages/SelectedTrip";

const ProtectedRoute = ({ element }) => {
    const isLoggedIn = Boolean(localStorage.getItem("token"));

    if (isLoggedIn) {
        return element;
    }

    return <Navigate to="/login" />;
};

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProtectedRoute element={<Layout />} />} >
                    <Route index element={<Home />} />
                    <Route path="/selected-trips" element={<SelectedTrips />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
