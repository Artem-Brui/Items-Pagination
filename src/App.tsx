import React, { useCallback, useState } from "react";
import "./App.css";
import { getItemsData, initialData, items } from "./utils";
import { Pagination } from "./components/Pagination";

export const App: React.FC = () => {
  const [state, setState] = useState({
    perPage: initialData.perPageInitial,
    activePage: 1,
  });

  const { perPage, activePage } = state;

  const handleSelectEvent = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setState({
        perPage: Number(
          event.target.value
        ) as (typeof initialData.perPageOptions)[number],
        activePage: 1,
      });
    },
    []
  );

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h1 className="mb-4">Items with Pagination</h1>

      <p className="lead mb-4" data-cy="info">
        {`Page ${activePage} (items ${
          getItemsData(items, perPage, activePage).message
        } of ${items.length})`}
      </p>

      <div className="mb-4">
        <div className="row align-items-center">
          <div className="col-3 col-sm-2 col-xl-1">
            <select
              onChange={handleSelectEvent}
              data-cy="perPageSelector"
              id="perPageSelector"
              className="form-select form-select-sm"
              value={perPage}
              style={{ minWidth: "70px" }}
            >
              {[...initialData.perPageOptions].map((opt) => {
                return (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                );
              })}
            </select>
          </div>

          <label htmlFor="perPageSelector" className="col-form-label col ms-5">
            items per page
          </label>
        </div>
      </div>

      <Pagination
        total={initialData.total}
        perPage={perPage}
        currentPage={activePage}
        onPageChange={(page) => setState({ ...state, activePage: page })}
      />
      <ul className="list-unstyled mt-4">
        {getItemsData(items, perPage, activePage).list.map(({ id, item }) => {
          return (
            <li key={id} data-cy="item" className="mb-2">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
