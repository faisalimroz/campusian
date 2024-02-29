import React, { useEffect, useState, useRef } from 'react';
import './Scholarship.css';
import ScholarshipDetail from './ScholarshipDetail/ScholarshipDetail';

const Scholarship = () => {
    const [scholarships, setScholarships] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [scholarshipsPerPage, setScholarshipsPerPage] = useState(6); // Adjust this value to change the number of scholarships per page
    const [totalPages, setTotalPages] = useState(0);
    const searchRef = useRef(null);
    const [search, setSearch] = useState('');

    const handleSearch = () => {
        setSearch(searchRef.current.value);
    };

    useEffect(() => {
        fetch(`http://localhost:5000/scholarship?search=${search}`)
            .then((res) => res.json())
            .then((data) => {
                setScholarships(data);
                setTotalPages(Math.ceil(data.length / scholarshipsPerPage));
            });
    }, [search]);

    const getCurrentPageScholarships = () => {
        const startIndex = (currentPage - 1) * scholarshipsPerPage;
        const endIndex = startIndex + scholarshipsPerPage;
        return scholarships.slice(startIndex, endIndex);
    };

    const handlePageChange = (newPage) => {
        if (newPage < 1 || newPage > totalPages) {
            return;
        }

        setCurrentPage(newPage);
    };

    return (
        <>
            <div className="form-control mt-5 mx-auto">
                <div id='input-group' className="input-group search-field-container">
                    <input
                        id="search"
                        type="text"
                        ref={searchRef}
                        placeholder="Search…"
                        className="input input-bordered search"
                    />
                    <button onClick={handleSearch} id='search-info' className="btn btn-square">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div>
                <div className="mt-8 flex flex-wrap justify-evenly">
                    {getCurrentPageScholarships().map((scholarship) => (
                        <ScholarshipDetail key={scholarship._id} scholarship={scholarship} />
                    ))}
                </div>
                <div className="pagination mt-4">
                    {totalPages > 1 && (
                        <>
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>

                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index + 1}
                                    className={currentPage === index + 1 ? 'active' : ''}
                                    onClick={() => handlePageChange(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            ))}

                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </button>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Scholarship;
