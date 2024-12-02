import React from "react";

const ResultsSection = ({ results }) => {
    return (
        <section className="bg-gray-100 p-6 rounded shadow">
            <h3 className="text-lg font-bold mb-4">검색 결과</h3>
            {results.length > 0 ? (
                <ul className="space-y-4">
                    {results.map((program, index) => (
                        <li key={index} className="p-4 bg-white rounded shadow">
                            <h4 className="font-bold text-xl">{program.name}</h4>
                            <p>시설명: {program.facilityName}</p>
                            <p>지역: {program.region}</p>
                            <p>연령대: {program.ageGroup}</p>
                            <p>시간대: {program.time}</p>
                            <p>가격: {program.price}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-600">검색 결과가 없습니다.</p>
            )}
        </section>
    );
};

export default ResultsSection;
