import React, { useState } from "react";
import SearchSection from "../components/SearchSection";
import FilterSection from "../components/FilterSection";
import ResultsSection from "../components/ResultsSection";

const Main = () => {
    const [searchKeyword, setSearchKeyword] = useState("");
    const [region, setRegion] = useState("");
    const [age, setAge] = useState("");
    const [time, setTime] = useState("");
    const [results, setResults] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        const filteredResults = []; // 데이터 연결 필요
        setResults(filteredResults);
    };

    return (
        <div className="space-y-6">
            <SearchSection
                searchKeyword={searchKeyword}
                setSearchKeyword={setSearchKeyword}
                handleSearch={handleSearch}
            />
            <FilterSection
                region={region}
                setRegion={setRegion}
                age={age}
                setAge={setAge}
                time={time}
                setTime={setTime}
                handleSearch={handleSearch}
            />
            <ResultsSection results={results} />
        </div>
    );
};

export default Main;
