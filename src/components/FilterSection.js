import React, { useState } from "react";

const regions = {
    "서울특별시": ["강남구", "강동구", "강북구", "강서구", "관악구", "용산구", "구로구",
        "노원구", "광진구", "마포구", "금천구", "중구", "도봉구", "종로구",
        "중랑구", "송파구", "서초구", "영등포구", "동대문구", "서대문구", "동작구",
        "성동구", "성북구", "은평구", "양천구"],

    "부산광역시": ["중구", "서구", "동구", "남구", "북구", "영도구", "부산진구",
        "해운대구", "수영구", "금정구", "동래구", "연제구", "사상구", "사하구", "기장군"],

    "인천광역시" : ["남동구", "중구", "동구", "남구", "미추홀구", "연수구",
        "부평구", "계양구", "강화군", "옹진군"],

    "대구광역시" : [ "중구", "동구", "서구", "남구", "북구", "수성구",
        "달서구", "달성군", "군위군"],

    "대전광역시" : ["동구", "중구", "서구", "유성구", "대덕구"],

    "울산광역시" : ["중구", "남구", "동구", "북구", "울주군"],

    "광주광역시" : [ "동구", "서구", "남구", "북구", "광산구"],

    "경기도": ["수원시", "고양시", "용인시", "성남시", "부천시", "안산시", "안양시", "남양주시",
        "화성시", "평택시", "의정부시", "파주시", "광명시", "김포시", "광주시", "군포시",
        "오산시", "이천시", "양주시", "구리시", "안성시", "포천시", "의왕시", "하남시",
        "여주시", "양평군", "가평군", "연천군"],

    "강원도": [ "춘천시", "속초시", "원주시", "강릉시", "동해시", "삼척시", "홍천군",
        "횡성군", "영월군", "평창군", "정선군", "철원군", "화천군", "양구군",
        "인제군", "고성군", "양양군"],

    "경상북도": ["포항시", "경주시", "김천시", "안동시", "구미시", "영주시", "영천시",
        "상주시", "문경시", "경산시", "의성군", "청송군", "영양군", "영덕군",
        "청도군", "고령군", "성주군", "칠곡군", "예천군", "봉화군", "울진군",
        "울릉군"],

    "경상남도" : ["창원시", "김해시", "양산시", "진주시", "거제시", "통영시", "사천시",
        "밀양시", "함안군", "창녕군", "의령군", "고성군", "남해군", "하동군",
        "산청군", "함양군", "거창군", "합천군"],

    "충청남도" : ["천안시", "공주시", "보령시", "아산시", "서산시", "논산시", "계룡시",
        "당진시", "금산군", "부여군", "서천군", "청양군", "홍성군", "예산군",
        "태안군"],

    "충청북도" : ["청주시", "충주시", "제천시", "보은군", "옥천군", "영동군", "증평군",
        "진천군", "괴산군", "음성군", "단양군"],

    "전라남도" : ["목포시", "여수시", "순천시", "나주시", "광양시", "담양군", "곡성군",
        "구례군", "고흥군", "보성군", "화순군", "장흥군", "강진군", "해남군",
        "영암군", "무안군", "함평군", "영광군", "장성군", "완도군", "진도군",
        "신안군"],

    "전라북도" : ["전주시", "군산시", "익산시", "정읍시", "남원시", "김제시", "완주군",
        "진안군", "무주군", "장수군", "임실군", "순창군", "고창군", "부안군"],

    "제주도": ["제주시", "서귀포시"]
};

const isSpecialProvince = (province) =>
    ["서울특별시", "부산광역시", "인천광역시", "대구광역시", "대전광역시", "울산광역시", "광주광역시"].includes(province);

const FilterSection = ({ region, setRegion, age, setAge, time, setTime, handleSearch }) => {
    const [weekday, setWeekday] = useState("");
    const [day, setDay] = useState("");
    const [price, setPrice] = useState("");
    const [startDate, setStartDate] = useState("");
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");

    const handleRegionChange = (e) => {
        const selectedRegion = e.target.value;
        setRegion(selectedRegion);

        // 초기화
        setCity("");
        setDistrict("");
    };

    const getDayOptions = () => {
        if (weekday === "평일") {
            return ["월", "화", "수", "목", "금"];
        } else if (weekday === "주말") {
            return ["토", "일"];
        }
        return [];
    };

    return (
        <section className="bg-gray-100 p-6 rounded shadow">
            <h3 className="text-lg font-bold mb-4">검색 옵션</h3>
            <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 연령층 선택 */}
                <div>
                    <label htmlFor="age" className="block font-medium mb-1">
                        연령층:
                    </label>
                    <select
                        name="age"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full p-2 border rounded"
                    >
                        <option value="">연령층 선택</option>
                        <option value="어린이">어린이</option>
                        <option value="초등학생">초등학생</option>
                        <option value="중학생">중학생</option>
                        <option value="성인">성인</option>
                        <option value="경로">경로</option>
                    </select>
                </div>

                {/* 시간대 선택 */}
                <div>
                    <label htmlFor="time" className="block font-medium mb-1">
                        시간대:
                    </label>
                    <select
                        name="time"
                        id="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full p-2 border rounded"
                    >
                        <option value="">시간대 선택</option>
                        <option value="오전">오전</option>
                        <option value="오후">오후</option>
                    </select>
                </div>

                {/* 평일/주말 선택 */}
                <div>
                    <label htmlFor="weekday" className="block font-medium mb-1">
                        평일/주말:
                    </label>
                    <select
                        name="weekday"
                        id="weekday"
                        value={weekday}
                        onChange={(e) => {
                            setWeekday(e.target.value);
                            setDay(""); // 요일 초기화
                        }}
                        className="w-full p-2 border rounded"
                    >
                        <option value="">선택</option>
                        <option value="평일">평일</option>
                        <option value="주말">주말</option>
                    </select>
                </div>

                {/* 요일 선택 */}
                <div>
                    <label htmlFor="day" className="block font-medium mb-1">
                        요일:
                    </label>
                    <select
                        name="day"
                        id="day"
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                        className="w-full p-2 border rounded"
                        disabled={!weekday}
                    >
                        <option value="">요일 선택</option>
                        {getDayOptions().map((d) => (
                            <option key={d} value={d}>
                                {d}
                            </option>
                        ))}
                    </select>
                </div>

                {/* 프로그램 가격 선택 */}
                <div>
                    <label htmlFor="price" className="block font-medium mb-1">
                        프로그램 가격:
                    </label>
                    <input
                        type="number"
                        name="price"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="가격 입력"
                        className="w-full p-2 border rounded"
                    />
                </div>

                {/* 프로그램 시작일자 */}
                <div>
                    <label htmlFor="startDate" className="block font-medium mb-1">
                        프로그램 시작일자:
                    </label>
                    <input
                        type="month"
                        name="startDate"
                        id="startDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                </div>

                {/* 지역 선택 섹션 */}
                <div className="col-span-full">
                    <label htmlFor="region" className="block font-medium mb-1">
                        지역:
                    </label>
                    <select
                        name="region"
                        id="region"
                        value={region}
                        onChange={handleRegionChange}
                        className="w-full p-2 border rounded"
                    >
                        <option value="">지역 선택</option>
                        {Object.keys(regions).map((regionKey) => (
                            <option key={regionKey} value={regionKey}>
                                {regionKey}
                            </option>
                        ))}
                    </select>

                    {region && (
                        <div className="mt-4">
                            <label htmlFor="cityOrDistrict" className="block font-medium mb-1">
                                {isSpecialProvince(region) ? "구" : "시/군"}:
                            </label>
                            <select
                                name="cityOrDistrict"
                                id="cityOrDistrict"
                                value={isSpecialProvince(region) ? district : city}
                                onChange={(e) =>
                                    isSpecialProvince(region) ? setDistrict(e.target.value) : setCity(e.target.value)
                                }
                                className="w-full p-2 border rounded"
                            >
                                <option value="">{isSpecialProvince(region) ? "구 선택" : "시/군 선택"}</option>
                                {(regions[region] || []).map((optionKey) => (
                                    <option key={optionKey} value={optionKey}>
                                        {optionKey}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                </div>

                {/* 필터링 버튼 */}
                <div className="col-span-full">
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
                    >
                        검색
                    </button>
                </div>
            </form>
        </section>
    );
};

export default FilterSection;
