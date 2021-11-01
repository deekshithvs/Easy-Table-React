import React, { useState } from "react";
import TableHeader from "./TableHeader";
import "./table.scss";
import TableRow from "./TableRow";
import { CONSTANTS } from "./constants";
import { sortUtil } from "./utils";
export default function Table({ headers, tableData }) {
  const [sortOrder, setSortOrder] = useState(CONSTANTS.sortOrder.ASCENDING);
  const [sortedColumn, setSortedColumn] = useState("age");
  const [data, setData] = useState(tableData);

  const handleSort = (id) => {
    setSortedColumn(id);

    let newSortOrder;
    if (sortOrder === CONSTANTS.sortOrder.ASCENDING) {
      newSortOrder = CONSTANTS.sortOrder.DESCENDING;
    } else if (sortOrder === CONSTANTS.sortOrder.DESCENDING) {
      newSortOrder = CONSTANTS.sortOrder.NONE;
    } else {
      newSortOrder = CONSTANTS.sortOrder.ASCENDING;
    }

    const updatedData = sortUtil(data, id, newSortOrder);
    // console.log("updatedData", updatedData);

    setData(
      newSortOrder === CONSTANTS.sortOrder.NONE ? tableData : updatedData
    );
    setSortOrder(newSortOrder);
  };

  return (
    <div className="c-table">
      <TableHeader
        classname=""
        headers={headers}
        sortHandler={handleSort}
        sortOrder={sortOrder}
        sortedColumn={sortedColumn}
      />
      <div className="table-body">
        {data.map((item) => {
          return <TableRow data={item} columns={headers} />;
        })}
      </div>
    </div>
  );
}
