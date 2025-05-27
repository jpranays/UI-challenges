import React, { useState } from 'react';
import './styles.css'

function DataTable({ data }) {
    const [pagination, setPagination] = useState({
        currentPage: 0,
        rowsPerPage: 2
    })

    return (
        <div>
            <table>
                <thead>
                    <th>
                        Id</th>
                    <th>
                        Name</th>
                    <th>Age</th>
                </thead>
                <tbody>
                    {data.slice(pagination.currentPage * pagination.rowsPerPage, pagination.rowsPerPage * (pagination.currentPage + 1)).map(({ id, name, age }) => {
                        return <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{age}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            <button onClick={() => {
                setPagination((prev) => {
                    return {
                        ...prev,
                        currentPage: prev.currentPage - 1
                    }
                })
            }}
                disabled={pagination.currentPage === 0}
            >Previous</button>
            <button
                onClick={() => {
                    setPagination((prev) => {
                        return {
                            ...prev,
                            currentPage: prev.currentPage + 1
                        }
                    })
                }}
                disabled={(pagination.currentPage + 1) * pagination.rowsPerPage >= data.length}
            >Next</button>

            <span>Rows per page:</span>
            <select onChange={(e) => {
                setPagination((prev) => {
                    return {
                        ...prev,
                        rowsPerPage: parseInt(e.target.value),
                        currentPage: 0
                    }
                })
            }}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
            </select>
        </div>
    );
}

export default DataTable;
body {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}

h1 {
  font-size: 1.5rem;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid black;
  text-align: left;
  padding: 8px;
}

th {
  text-align: center;
  font-weight: bold;
}


import DataTable from "./DataTable";

export default function App() {
    const sampleData = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 },
        { id: 4, name: "David", age: 28 },
        { id: 5, name: "Eve", age: 27 },
        { id: 6, name: "Frank", age: 33 },
        { id: 7, name: "Grace", age: 24 },
        { id: 8, name: "Hank", age: 26 },
        { id: 9, name: "Ivy", age: 21 },
        { id: 10, name: "Jack", age: 29 }
    ];

    return <DataTable data={sampleData} />;
}
