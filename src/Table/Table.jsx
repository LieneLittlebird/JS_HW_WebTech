/*
Name, LastName = Liene Putniņa
Student ID = lr12022 */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from "react";
import "./table.css";

const Table = ({ data, casesOrDeaths }) => (
  <table>
    <thead>
      <tr>
        <th>Country</th>
        <th>Population</th>
        <th>Week</th>
        <th>{casesOrDeaths === "Cases" ? "Cases weekly" : "Deaths weekly"}</th>
        <th>Cumulative count</th>
      </tr>
    </thead>
    <tbody>
      {data.map((object, index) => {
        const {
          country,
          population,
          year_week,
          weekly_count,
          cumulative_count,
        } = object;

        return (
          <tr key={`row_${country + year_week + index}`}>
            <td>{country}</td>
            <td>{population}</td>
            <td>{year_week}</td>
            <td>{weekly_count}</td>
            <td>{cumulative_count}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default Table;
