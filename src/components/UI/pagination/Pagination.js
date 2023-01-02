import React, { useEffect, useMemo } from "react";
import './Pagination.css'

function Pagination(props) {
  const totalPages = Math.ceil(props.totalItems / props.itemsPerPage);
  const pageItems = [];
  for (let i = 1; i <= totalPages; i++) {
    pageItems.push(
      <li
        className={`page-item mr-2 ${i === props.currentPage ? "active" : ""}`}
        key={i}
      >
        <button
          className="page-link"
          style={{ borderRadius: "0.25rem" }}
          onClick={() => props.goTo(i)}
        >
          {i}
        </button>
      </li>
    );
  }

  const handlePrev = () => {
    if (props.currentPage !== 1) {
      props.goTo(props.currentPage - 1);
    }
  };
  const handleNext = () => {
    if (props.currentPage !== totalPages) {
      props.goTo(props.currentPage + 1);
    }
  };
  return (
    <nav aria-label="Page navigation ">
      <ul className="pagination d-flex justify-content-end">
        <li className="page-item  mr-2">
          <button
            className="page-link"
            onClick={handlePrev}
            style={{ borderRadius: "0.25rem" }}
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </button>
        </li>
        {pageItems}
        <li className="page-item  mr-2">
          <button
            className="page-link"
            style={{ borderRadius: "0.25rem" }}
            onClick={handleNext}
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
