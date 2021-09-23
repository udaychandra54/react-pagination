import React, { useState } from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
 

  for (let i = 1; i < totalPosts / postsPerPage + 1; i++) {
    pageNumbers.push(i);
  }
 
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => {
          return (
            <li
              className='page-item'
              key={Math.random().toString()}
              onClick={() => paginate(number)}
              style={{cursor:"pointer"}}
            >
              <a to="!#" className="page-link">
                {number}
               
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
