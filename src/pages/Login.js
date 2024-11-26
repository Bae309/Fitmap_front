import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ handleLogin }) => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id && password) {
            handleLogin();
            navigate("/"); // 로그인 성공 시 메인 페이지로 이동
        } else {
            alert("아이디와 비밀번호를 입력하세요.");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">로그인</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* 아이디 입력 */}
                <div>
                    <label htmlFor="id" className="block font-medium text-gray-700">
                        아이디
                    </label>
                    <input
                        type="text"
                        id="id"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        placeholder="아이디를 입력하세요"
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* 비밀번호 입력 */}
                <div>
                    <label htmlFor="password" className="block font-medium text-gray-700">
                        비밀번호
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="비밀번호를 입력하세요"
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* 로그인 버튼 */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
                >
                    로그인
                </button>
            </form>

            {/* 추가 링크 */}
            <div className="flex justify-between mt-4 text-sm text-blue-600">
                <Link to="/find-id" className="hover:underline">
                    ID/비밀번호 찾기
                </Link>
                <Link to="/signup" className="hover:underline">
                    회원가입
                </Link>
            </div>
        </div>
    );
};

export default Login;
