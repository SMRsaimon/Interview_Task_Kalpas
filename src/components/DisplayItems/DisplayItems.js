import React, { memo, useState } from 'react';
import { pageNumber } from '../../helpers/pageNumberHelper';
import CardItem from '../CardItem/CardItem';
import './DisplayItems.scss';

const DisplayItems = ({ loadData, viewStyle }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 34;
  const pages = [];
  for (let i = 1; i <= Math.ceil(loadData.length / itemPerPage); i++) {
    pages.push(i);
  }
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItem = loadData.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div className="p-5">
      <div className={viewStyle === 'list' ? 'list' : 'grid'}>
        {currentItem.map((data, idx) => (
          <CardItem key={idx} item={data} />
        ))}
      </div>
      <div className="itemPagination text-center mt-3">
        <ul>
          <li>
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === pages[0] ? true : false}
            >
              Prev
            </button>
          </li>
          {pageNumber(pages, currentPage, setCurrentPage)}
          <li>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === pages?.length ? true : false}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default memo(DisplayItems);
