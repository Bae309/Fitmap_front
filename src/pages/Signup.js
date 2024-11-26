import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [formData, setFormData] = useState({
        id: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { id, username, email, password, confirmPassword } = formData;

        if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        // 실제 회원가입 API 요청 처리
        console.log("회원가입 데이터:", { id, username, email, password });
        alert("회원가입 성공!");
        navigate("/login"); // 회원가입 완료 후 로그인 화면으로 이동
    };

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">회원가입</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* 아이디 */}
                <div>
                    <label htmlFor="id" className="block font-medium text-gray-700">
                        아이디
                    </label>
                    <input
                        type="text"
                        name="id"
                        id="id"
                        value={formData.id}
                        onChange={handleChange}
                        placeholder="아이디를 입력하세요"
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* 사용자 이름 */}
                <div>
                    <label htmlFor="username" className="block font-medium text-gray-700">
                        이름
                    </label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="이름을 입력하세요"
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* 이메일 */}
                <div>
                    <label htmlFor="email" className="block font-medium text-gray-700">
                        이메일
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="이메일을 입력하세요"
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* 비밀번호 */}
                <div>
                    <label htmlFor="password" className="block font-medium text-gray-700">
                        비밀번호
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="비밀번호를 입력하세요"
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* 비밀번호 확인 */}
                <div>
                    <label
                        htmlFor="confirmPassword"
                        className="block font-medium text-gray-700"
                    >
                        비밀번호 확인
                    </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="비밀번호를 다시 입력하세요"
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* 회원가입 버튼 */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
                >
                    회원가입
                </button>
            </form>

            {/* 뒤로가기 버튼 */}
            <button
                onClick={() => navigate("/login")}
                className="mt-4 w-full bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400 focus:ring-2 focus:ring-gray-500"
            >
                뒤로가기
            </button>
        </div>
    );
};

export default Signup;
