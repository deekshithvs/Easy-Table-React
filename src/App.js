import React from "react";
import Table from "./components/table";
import "./styles.scss";

export default function App({ headers, data }) {
  const columnsDetails = {
    columns:  [
      {
        accessor: "name",
        displayName: "Name",
        id: "name",
        contanerClassName: "bg-danger",
        type: "string"
      },
      {
        accessor: "age",
        displayName: "Age",
        id: "age",
        contanerClassName: "bg-primary",
        type: "number",
      },
      {
        accessor: "dob",
        displayName: "Date of Birth",
        id: "dob",
        contanerClassName: "text-danger bg-secondary",
        type: "date",  
      }
    ],
    meta: {
      columnContainerClass: "bg-secondary px-2"
    }
  };
  const testData = [
    {
      name: "deekshith",
      age: 18,
      dob: "08-12-1908"
    },
    {
      name: "Person A",
      age: 20,
      dob: "12-08-1898"
    },
    {
      name: "Ram",
      age: 20,
      dob: "01-09-1908"
    },
    {
      name: "JhonSon",
      age: 30,
      dob: "09-10-2009"
    },
    {
      name: "Sam",
      age: 40,
      dob: "08-01-2008"
    },
    {
      name: "Cleark",
      age: 23,
      dob: "02-12-1990"
    },
    {
      name: "Gayle",
      age: 20,
      dob: "08-12-2003"
    }
  ];

  return (
    <div className="App ml-4">
      <Table
        tableData={data ? data : testData}
        headers={headers ? headers.columns : columnsDetails.columns}
        headersMeta={headers ? headers.meta : columnsDetails.meta}
      />
    </div>
  );
}
