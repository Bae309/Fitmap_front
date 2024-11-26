import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import ProgramInfo from "./pages/ProgramInfo";
import CustomerService from "./pages/CustomerService";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; // 회원가입 페이지 import
import FindId from "./pages/FindId";
import "./CSS/index.css"

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => setIsLoggedIn(true);
    const handleLogout = () => setIsLoggedIn(false);

    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
                <main className="flex-grow container mx-auto p-4">
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/about" element={<ProgramInfo />} />
                        <Route path="/contact" element={<CustomerService />} />
                        <Route
                            path="/login"
                            element={<Login handleLogin={handleLogin} />}
                        />
                        <Route path="/signup" element={<Signup />} /> {/* 회원가입 라우터 추가 */}
                        <Route path="/find-id" element={<FindId />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
