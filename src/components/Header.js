import React from "react";
import { Link } from "react-router-dom";

const Header = ({ isLoggedIn, handleLogout }) => {
    return (
        <header className="bg-blue-600 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">FitMap</h1>
                <nav className="flex gap-4">
                    <Link to="/" className="hover:underline">
                        홈
                    </Link>
                    <Link to="/contact" className="hover:underline">
                        고객센터
                    </Link>
                    {isLoggedIn ? (
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 px-4 py-2 rounded hover:bg-red-700"
                        >
                            로그아웃
                        </button>
                    ) : (
                        <Link
                            to="/login"
                            className="bg-green-500 px-4 py-2 rounded hover:bg-green-700"
                        >
                            로그인
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
