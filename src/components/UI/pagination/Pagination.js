import "./Pagination.css";

function Pagination(props) {
  const totalPages = Math.ceil(props.totalItems / props.itemsPerPage);
  const pageItems = [
    <li key={1} className={`page-item mr-4`}>
      <button className="page-link pt-1 pb-1" style={{ borderRadius: "0.25rem" }}>
        {1}
      </button>
    </li>,
  ];
  if (totalPages > 1) {
    pageItems.push(
      <li
        className={`page-item mr-4`}
        key={2}
      >
        <button
          className="page-link pt-1 pb-1"
          style={{ borderRadius: "0.25rem" }}
        >
          {totalPages}
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
    <nav aria-label="Page navigation" style={{marginTop:'1em!important'}}>
      <ul data-cy="pagination" className="pagination d-flex justify-content-end">
        <li className="page-item  mr-4">
          <button
            className="page-link pt-1 pb-1"
            onClick={handlePrev}
            style={{ borderRadius: "0.25rem" }}
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </button>
        </li>
        {pageItems}
        <li className="page-item">
          <button
            className="page-link pt-1 pb-1"
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
