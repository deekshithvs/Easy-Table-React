import React from "react";
import Table from "./components/table";
import "./styles.scss";

export default function App({ headers, data }) {
  const testHeaders = [
    {
      accessor: "name",
      displayName: "Name",
      id: "name",
      contanerClassName: "bg-danger"
    },
    {
      accessor: "age",
      displayName: "Age",
      id: "age",
      contanerClassName: "bg-primary"
    },
    {
      accessor: "dob",
      displayName: "Date of Birth",
      id: "dob",
      contanerClassName: "text-danger bg-secondary"
    }
  ];
  const testDdata = [
    {
      name: "deekshith",
      age: 18,
      dob: "08-12-1898"
    },
    {
      name: "Person A",
      age: 20,
      dob: "08-12-1898"
    },
    {
      name: "Ram",
      age: 20,
      dob: "08-12-1898"
    },
    {
      name: "JhonSon",
      age: 30,
      dob: "09-10-1898"
    },
    {
      name: "Sam",
      age: 40,
      dob: "08-01-1098"
    },
    {
      name: "Cleark",
      age: 23,
      dob: "02-12-1898"
    },
    {
      name: "Gayle",
      age: 20,
      dob: "08-12-1898"
    }
  ];
  return (
    <div className="App ml-4">
      <Table tableData={data} headers={headers} />
    </div>
  );
}
