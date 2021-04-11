/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */

// handle button cliks
// setFilteredData(data.filter.magic)
import { useState } from "react";

import "./form.css";

import data from "../data.js";

const continentOptions = data
  .map((x) => x.continent)
  .filter((v, i, x) => x.indexOf(v) === i);

const countryOptions = data
  .map((x) => x.country)
  .filter((v, i, x) => x.indexOf(v) === i);

const CovidForm = () => {
  const showList = () => {
    /* 
    1. Grab all the fields (event.target.value?)
    2. Check what's chosen
    3. Post the results as tr 
    3.1. Change cases weekly to deaths weekly and vice versa */
  };

  return (
    <div id="form">
      <div className="form-element">
        <label htmlFor="continent-select">Continent:</label>
        <select id="continent-select" defaultValue="selected">
          <option value="All">All</option>
          {continentOptions.map((continentOption) => (
            <option key={continentOption} value={continentOption}>
              {continentOption}
            </option>
          ))}
        </select>
      </div>
      <div className="form-element">
        <label htmlFor="country-select">Country:</label>
        <select id="country-select">
          <option value="All">All</option>
          {countryOptions.map((countryOption) => (
            <option key={countryOption} value={countryOption}>
              {countryOption}
            </option>
          ))}
        </select>
      </div>
      <div className="form-element">
        <label htmlFor="year-from">Year from:</label>
        <input type="text" id="year-from" placeholder="YYYY" />
      </div>
      <div className="form-element">
        <label htmlFor="week-from">Week from:</label>
        <input type="text" id="week-from" placeholder="Week number" />
      </div>
      <div className="form-element">
        <label htmlFor="year-till">Year till:</label>
        <input type="text" id="year-till" placeholder="YYYY" />
      </div>
      <div className="form-element">
        <label htmlFor="week-till">Week till:</label>
        <input type="text" id="week-till" placeholder="Week number" />
      </div>
      <div className="form-element">
        <label htmlFor="cases">Cases</label>
        <input type="radio" id="cases" name="indicator" value="cases" checked />
        <label htmlFor="deaths">Deaths</label>
        <input type="radio" id="deaths" name="indicator" value="deaths" />
      </div>
      <div className="form-element">
        <label htmlFor="search">Country search:</label>
        <input type="search" id="search" />
      </div>
      <button id="show-list" type="submit" className="form-element">
        Show list
      </button>
      {/* Button onClick={showList} */}
    </div>
  );
};
export default CovidForm;
