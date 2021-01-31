import React from "react";

export const Pagination = ({ datasPerPage, totalDatas, paging }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDatas / datasPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              type="button"
              onClick={() => paging(number)}
              className="page-link"
              style={{ background: "grey", color: "white", fontWeight: "bold" }}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
