import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import CustomerService from "./pages/CustomerService";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; // 회원가입 페이지 import
import FindId from "./pages/FindId";
import "./CSS/index.css"

// 이미지 파일 import


const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => setIsLoggedIn(true);
    const handleLogout = () => setIsLoggedIn(false);

    return (
        <Router>
            {/* 배경 이미지를 동적으로 설정 */}
            <div
                className="bg-cover bg-center bg-no-repeat min-h-screen flex flex-col"
            >
                <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
                <main className="flex-grow container mx-auto p-4">
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/contact" element={<CustomerService />} />
                        <Route
                            path="/login"
                            element={<Login handleLogin={handleLogin} />}
                        />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/find-id" element={<FindId />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;