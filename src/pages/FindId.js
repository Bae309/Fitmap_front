import React, { useState } from "react";

const FindId = () => {
    const [email, setEmail] = useState("");
    const [foundId, setFoundId] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        // 아이디 찾기 로직 (예: API 호출)
        if (email === "test@example.com") {
            // 이메일이 일치하는 경우 (예제 데이터)
            setFoundId("user123");
        } else {
            alert("등록된 이메일이 없습니다.");
            setFoundId(null);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">아이디 찾기</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* 이메일 입력 */}
                <div>
                    <label htmlFor="email" className="block font-medium text-gray-700">
                        이메일
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="등록된 이메일을 입력하세요"
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* 아이디 찾기 버튼 */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
                >
                    아이디 찾기
                </button>
            </form>

            {/* 결과 출력 */}
            {foundId && (
                <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
                    <p>찾은 아이디: <strong>{foundId}</strong></p>
                </div>
            )}

            {/* 뒤로가기 버튼 */}
            <button
                onClick={() => window.history.back()}
                className="mt-4 w-full bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400 focus:ring-2 focus:ring-gray-500"
            >
                뒤로가기
            </button>
        </div>
    );
};

export default FindId;
