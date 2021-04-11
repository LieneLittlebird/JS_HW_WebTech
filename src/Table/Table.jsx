import React from "react";
import "./table.css";

const Table = () => (
  <table>
    <tr>
      <th>Country</th>
      <th>Population</th>
      <th>Week</th>
      <th id="indicator">Cases weekly</th>
      <th id="indicator_cumulative">Cumulative count</th>
    </tr>
    {/* <!-- filteredData.map(data => <tr>
        <td>{data.continent}</td>
        <td>{data.country}</td>
        <td>{data.continent}</td>
        <td>{data.continent}</td>
        <td>{data.continent}</td>
      </tr>) --> */}
  </table>
);

export default Table;
