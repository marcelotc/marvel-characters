import { useState, Dispatch, SetStateAction } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Container, Page } from './style';

interface PaginationProps {
    totalCharacters: number;
    characterPerPage: number;
    setPageOffest: Dispatch<SetStateAction<number>>;
}

export function Pagination({ totalCharacters, characterPerPage, setPageOffest }: PaginationProps) {
  const [currentPage, setcurrentPage] = useState(1);

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (number: any) => {
    setcurrentPage(number);
    setPageOffest(number - 1);
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(totalCharacters / characterPerPage); i++) {
    pages.push(i);
  }

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <Page 
            key={number}
            onClick={() => handleClick(number)}
            active={currentPage === number ? true : false}
        >{number}</Page>
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);
    setPageOffest(currentPage);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);
    setPageOffest(currentPage - 2);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <span onClick={handleNextbtn}> ... </span>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <span onClick={handlePrevbtn}> ... </span>;
  }

  
    return (
        <Container>
            <button
                onClick={handlePrevbtn}
                disabled={currentPage == pages[0] 
                ? true : false}><FaChevronLeft />
            </button>
            {pageDecrementBtn}
            {renderPageNumbers}
            {pageIncrementBtn}
            <button
                onClick={handleNextbtn}
                disabled={currentPage == pages[pages.length - 1] 
                ? true : false}><FaChevronRight />
            </button>
        </Container>
    )
}
