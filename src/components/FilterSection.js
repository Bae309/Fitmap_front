import React from "react";

const FilterSection = ({ region, setRegion, age, setAge, time, setTime, handleSearch }) => {
    return (
        <section className="bg-gray-100 p-6 rounded shadow">
            <h3 className="text-lg font-bold mb-4">필터링 옵션</h3>
            <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="region" className="block font-medium mb-1">
                        지역:
                    </label>
                    <select
                        name="region"
                        id="region"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        className="w-full p-2 border rounded"
                    >
                        <option value="서울특별시">서울특별시</option>
                        <option value="경기도">경기도</option>
                        <option value="부산광역시">부산광역시</option>
                    </select>
                </div>
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
                        <option value="어린이">어린이</option>
                        <option value="초등학생">초등학생</option>
                        <option value="중학생">중학생</option>
                        <option value="성인">성인</option>
                        <option value="경로">경로</option>
                    </select>
                </div>
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
                        <option value="오전">오전</option>
                        <option value="오후">오후</option>
                        <option value="저녁">저녁</option>
                    </select>
                </div>
                <div className="col-span-full">
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
                    >
                        필터링
                    </button>
                </div>
            </form>
        </section>
    );
};

export default FilterSection;
