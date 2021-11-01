import React from "react";

export default function TableRow({ data, columns }) {
  return (
    <div className="row mx-2 px-1 py-1">
      {columns.map((column) => {
        return (
          <td
            className={`col ${
              column.contanerClassName ? column.contanerClassName : ""
            }`}
          >
            {data[column.accessor] || ""}
          </td>
        );
      })}
    </div>
  );
}
