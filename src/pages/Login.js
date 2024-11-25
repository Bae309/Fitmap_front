import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ handleLogin }) => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id && password) {
            handleLogin();
            navigate("/");
        } else {
            alert("아이디와 비밀번호를 입력하세요.");
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">로그인</h2>
            <form onSubmit={handleSubmit}>
                <label className="block mb-2">
                    ID:
                    <input
                        type="text"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        className="w-full p-2 border rounded mt-1"
                    />
                </label>
                <label className="block mb-2">
                    비밀번호:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border rounded mt-1"
                    />
                </label>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded mt-4 hover:bg-blue-700"
                >
                    로그인
                </button>
            </form>
            <div className="flex justify-between mt-4 text-sm text-blue-600">
                <a href="/find-id" className="hover:underline">
                    ID/비밀번호 찾기
                </a>
                <a href="/signup" className="hover:underline">
                    회원가입
                </a>
            </div>
        </div>
    );
};

export default Login;
