import './paginator.scss';
import React from 'react';
import { useState } from 'react';
import { nextPageBtn, prevPageBtn } from '../../assets/images';

interface PaginatorProps {
    itemsPerPage: number;
    totalItems: number;
    onPageChange: (pageNumber: number) => void;
    onPageChangeIndex: (index: number) => void;
};

const Paginator = ({ itemsPerPage, totalItems, onPageChange, onPageChangeIndex }: PaginatorProps) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageIdx, setPageIdx] = useState<number>(itemsPerPage);

    const pageNumbers: number[] = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
    }

    const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    onPageChange(pageNumber);

    if ([1, 2, 5, 10].includes(pageNumber)) {
        setPageIdx(pageNumber * 10);
    }
    };

    const handlePageChangeIndex = (value: number) => {
    setPageIdx(value);
    onPageChangeIndex(value);
    setCurrentPage(Math.ceil(value / itemsPerPage));
    };

    return (
    <div className='paginator'>
        <div className='paginator-row'>
        <p className='paginator-text'>Showing</p>
        <select
            className='paginator-select'
            value={pageIdx}
            onChange={(e) => {
            handlePageChangeIndex(Number(e.target.value));
            }}
        >
            <option value='10'>10</option>
            <option value='20'>20</option>
            <option value='50'>50</option>
            <option value='100'>100</option>
        </select>
        <p className='paginator-text'>{`out of ${totalItems}`}</p>
        </div>
        <div style={{ gap: '20px' }} className='paginator-row'>
        <img
            className='paginator-btn'
            src={prevPageBtn}
            alt='Previous Page Button'
            loading='lazy'
            onClick={() => {
            if (currentPage > 1) {
                handlePageChange(currentPage - 1);
                onPageChange(currentPage - 1);
            }
            }}
        />
        {pageNumbers.map((pageNumber: number) => (
            (pageNumber === 1) || (pageNumber === 2) || (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 2) || (pageNumber === pageNumbers.length - 1) || (pageNumber === pageNumbers.length) ? (
            <p
                className={pageNumber === currentPage ? 'paginator-active' : 'paginator-text'}
                key={pageNumber}
                onClick={() => {
                handlePageChange(pageNumber);
                }}
            >
                {pageNumber}
            </p>
            ) : pageNumber === currentPage + 3 && currentPage < pageNumbers.length - 2 ? (
            <p
                className='paginator-text'
                key={pageNumber}
                onClick={() => {
                handlePageChange(currentPage + 5);
                }}
            >
                ...
            </p>
            ) : null
        ))}
        <img
            className='paginator-btn'
            src={nextPageBtn}
            alt='Next Page Button'
            loading='lazy'
            onClick={() => {
            if (currentPage < pageNumbers.length) {
                handlePageChange(currentPage + 1);
            }
            }}
        />
        </div>
    </div>
    );
};

export default Paginator;