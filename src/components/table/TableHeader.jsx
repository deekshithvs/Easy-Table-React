import React from "react";
import { CONSTANTS } from "./constants";

export default function TableHeader({
  headers,
  classname,
  sortHandler,
  sortOrder,
  sortedColumn
}) {
  return (
    <thead className="table-header row mx-2 px-1 py-1">
      {headers.map((header, index) => {
        return (
          <th
            className="col pd-2"
            key={header.accessor}
            onClick={() => sortHandler(header.id)}
          >
            {header.displayName}
            <i class="fas fa-caret-down"></i>
            <span className="sort-icon">
              {sortedColumn === header.id &&
                (sortOrder === CONSTANTS.sortOrder.ASCENDING ? (
                  <img src="https://img.icons8.com/color/48/000000/circled-up--v3.png" />
                ) : sortOrder === CONSTANTS.sortOrder.DESCENDING ? (
                  <img src="https://img.icons8.com/color/48/000000/circled-down--v3.png" />
                ) : null)}
            </span>
          </th>
        );
      })}
    </thead>
  );
}
