import React from "react";

const SearchSection = ({ searchKeyword, setSearchKeyword, handleSearch }) => {
    return (
        <section className="bg-gray-100 p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">스포츠강좌 검색</h2>
            <form onSubmit={handleSearch} className="flex gap-4">
                <input
                    type="text"
                    placeholder="시설명 또는 프로그램명 입력"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    className="flex-grow p-2 border rounded"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    검색
                </button>
            </form>
        </section>
    );
};

export default SearchSection;
