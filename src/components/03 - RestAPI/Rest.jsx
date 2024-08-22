import React, { useState, useEffect } from "react";
import axios from "axios";

import { Table } from "react-bootstrap";
import "./rest.css";

export default function Rest() {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.restful-api.dev/objects")
      .then((response) => {
        console.log("Response", response);
        setFetchedData(response.data);
      })
      .catch((error) => {
        console.log("Error caught", error);
      });
  }, []);
  return (
    <div className="restApiTable">
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th colSpan={4}>Details</th>
          </tr>
        </thead>
        <tbody>
          {fetchedData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                Color:
                <br />
                {item.data?.color || item.data?.Color || "-"}
              </td>
              <td>
                Capacity: <br />
                {item.data?.capacity || item.data?.Capacity || "-"}
              </td>
              <td>
                Description: <br />
                {item.data?.description || item.data?.Description || "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
