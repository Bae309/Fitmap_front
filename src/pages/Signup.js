import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const regions = {
    "서울특별시": {
        "강남구": [], "강동구": [], "강북구": [], "강서구": [], "관악구": [], "용산구" : [], "구로구" : [],
        "노원구" : [], "광진구": [], "마포구": [], "금천구": [], "중구":[], "도봉구":[], "종로구" : [],
        "중랑구" : [], "송파구" : [], "서초구" : [], "영등포구" :[], "동대문구" : [], "서대문구" : [], "동작구" : [],
        "성동구": [], "성북구" : [], "은평구" : [], "양천구" : []
    },
    "부산광역시": {
        "중구": [], "서구": [], "동구": [], "남구": [], "북구" : [], "영도구": [], "부산진구" : [],
        "해운대구" : [], "수영구" : [], "금정구" : [], "동래구": [], "연제구" :[], "사상구" : [],
        "사하구": [], "기장군" : []
    },
    "인천광역시" : {
        "남동구" : [],"중구" : [], "동구" : [], "남구" :[], "미추홀구" :[], "연수구" : [],
        "부평구" : [], "계양구" : [], "강화군" : [], "옹진군" : []
    },
    "대구광역시" : {
        "중구" : [], "동구" : [], "서구" : [], "남구" : [], "북구" : [], "수성구" : [],
        "달서구" : [], "달성군" : [], "군위군" : []
    },
    "대전광역시" : {
        "동구" : [], "중구" : [], "서구" : [], "유성구" : [], "대덕구" : []
    },
    "울산광역시" : {
        "중구" : [], "남구" : [], "동구" : [], "북구" : [], "울주군" : []
    },
    "광주광역시" : {
        "동구" : [], "서구" : [], "남구" : [], "북구" : [], "광산구" : []
    },
    "경기도": {
        "수원시": [], "고양시": [], "용인시": [], "성남시": [], "부천시": [], "안산시": [], "안양시": [], "남양주시": [],
        "화성시": [], "평택시": [], "의정부시": [], "파주시": [], "광명시": [], "김포시": [], "광주시": [], "군포시": [],
        "오산시": [], "이천시": [], "양주시": [], "구리시": [], "안성시": [], "포천시": [], "의왕시": [], "하남시": [],
        "여주시": [], "양평군": [], "가평군": [], "연천군": [],
    },
    "강원도": {
        "춘천시": [], "속초시": [], "원주시": [], "강릉시": [], "동해시": [], "삼척시": [], "홍천군": [],
        "횡성군": [], "영월군": [], "평창군": [], "정선군": [], "철원군": [], "화천군": [], "양구군": [],
        "인제군": [], "고성군": [], "양양군": []
    },
    "경상북도": {
        "포항시": [], "경주시": [], "김천시": [], "안동시": [], "구미시": [], "영주시": [], "영천시": [],
        "상주시": [], "문경시": [], "경산시": [], "의성군": [], "청송군": [], "영양군": [], "영덕군": [],
        "청도군": [], "고령군": [], "성주군": [], "칠곡군": [], "예천군": [], "봉화군": [], "울진군": [],
        "울릉군": []
    },
    "경상남도": {
        "창원시": [], "김해시": [], "양산시": [], "진주시": [], "거제시": [], "통영시": [], "사천시": [],
        "밀양시": [], "함안군": [], "창녕군": [], "의령군": [], "고성군": [], "남해군": [], "하동군": [],
        "산청군": [], "함양군": [], "거창군": [], "합천군": []
    },
    "충청남도": {
        "천안시": [], "공주시": [], "보령시": [], "아산시": [], "서산시": [], "논산시": [], "계룡시": [],
        "당진시": [], "금산군": [], "부여군": [], "서천군": [], "청양군": [], "홍성군": [], "예산군": [],
        "태안군": []
    },
    "충청북도": {
        "청주시": [], "충주시": [], "제천시": [], "보은군": [], "옥천군": [], "영동군": [], "증평군": [],
        "진천군": [], "괴산군": [], "음성군": [], "단양군": []
    },
    "전라남도": {
        "목포시": [], "여수시": [], "순천시": [], "나주시": [], "광양시": [], "담양군": [], "곡성군": [],
        "구례군": [], "고흥군": [], "보성군": [], "화순군": [], "장흥군": [], "강진군": [], "해남군": [],
        "영암군": [], "무안군": [], "함평군": [], "영광군": [], "장성군": [], "완도군": [], "진도군": [],
        "신안군": []
    },
    "전라북도": {
        "전주시": [], "군산시": [], "익산시": [], "정읍시": [], "남원시": [], "김제시": [], "완주군": [],
        "진안군": [], "무주군": [], "장수군": [], "임실군": [], "순창군": [], "고창군": [], "부안군": []
    },
    "제주도" : {
        "제주시" : [], "서귀포시" : []
    }
}

const isSpecialProvince = (province) =>
    ["서울특별시", "부산광역시", "대구광역시" ,"대전광역시", "울산광역시", "인천광역시", "광주광역시"].includes(province);

const Signup = () => {
    const [formData, setFormData] = useState({
        id: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        province: "",
        city: "",
        district: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === "province") {
            // 광역시나 특별시 선택 시 시, 구 초기화
            if (isSpecialProvince(value)) {
                setFormData({ ...formData, province: value, city: "", district: "" });
            } else {
                setFormData({ ...formData, province: value, city: "", district: "" });
            }
        }

        // 구 초기화
        if (name === "city") {
            setFormData({ ...formData, city: value, district: "" });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, email, password, confirmPassword, province, city, district } = formData;

        if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        if (!province || (!city && !isSpecialProvince(province)) || !district) {
            alert("주소를 모두 선택해주세요.");
            return;
        }

        console.log("회원가입 데이터:", { username, email, password, province, city, district });
        alert("회원가입 성공!");
        navigate("/login");
    };

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">회원가입</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                    <label htmlFor="confirmPassword" className="block font-medium text-gray-700">
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

                {/* 도 선택 */}
                <div>
                    <label htmlFor="province" className="block font-medium text-gray-700">
                        도
                    </label>
                    <select
                        name="province"
                        id="province"
                        value={formData.province}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                        required
                    >
                        <option value="">도 선택</option>
                        {Object.keys(regions).map((province) => (
                            <option key={province} value={province}>
                                {province}
                            </option>
                        ))}
                    </select>
                </div>

                {/* 시 선택 */}
                {formData.province && !isSpecialProvince(formData.province) && (
                    <div>
                        <label htmlFor="city" className="block font-medium text-gray-700">
                            시/군
                        </label>
                        <select
                            name="city"
                            id="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                            required
                        >
                            <option value="">시/군 선택</option>
                            {Object.keys(regions[formData.province] || {}).map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {/* 구 선택 */}
                {isSpecialProvince(formData.province) && (
                    <div>
                        <label htmlFor="district" className="block font-medium text-gray-700">
                            구
                        </label>
                        <select
                            name="district"
                            id="district"
                            value={formData.district}
                            onChange={handleChange}
                            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                            required
                        >
                            <option value="">구 선택</option>
                            {Object.keys(regions[formData.province] || {}).map((district) => (
                                <option key={district} value={district}>
                                    {district}
                                </option>
                            ))}
                        </select>
                    </div>
                )}


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
