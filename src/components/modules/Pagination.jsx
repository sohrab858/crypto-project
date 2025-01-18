import React from "react";
import { useState } from "react";

import styles from "./Pagination.module.css";

function Pagination({ page, setPage }) {
  const previousHandler = () => {
    if (page <= 1) return;
    setPage((page) => page - 1);
  };
  const nextHandler = () => {
    if (page >= 10) return;
    setPage((page) => page + 1);
  };
  return (
    <div className="styles.pagination">
      <button
        onClick={previousHandler}
        className={page == 1 ? styles.disable : null}
      >
        previos
      </button>
      <p>{page}</p>
      <p>{page + 1}</p>
      {page > 2 && page < 9 && (
        <>
          <span>...</span>
          <p>{page}</p>
        </>
      )}
      <span>...</span>
      <p>{page + 2}</p>
      <p>{page + 3}</p>
      <button
        onClick={nextHandler}
        className={page == 10 ? styles.disable : null}
      >
        next
      </button>
    </div>
  );
}

export default Pagination;
