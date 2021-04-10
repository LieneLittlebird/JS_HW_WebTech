/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";

import "./form.css";

import data from "../data.js";

const CovidForm = () => {
  const [continent, setContinent] = useState("");
  // const chooseContinent = (event) => {
  //   setContinent(event.continent);
  // };

  return (
    // handle button cliks
    // setFilteredData(data.filter.magic)

    <div id="form">
      <div className="form-element">
        <label htmlFor="continent-select">Continent:</label>
        <select id="continent-select" defaultValue="selected">
          <option value="All">All</option>
          {/* <option value="continent">{data.map(data,index)}</option> */}
        </select>
      </div>
      <div className="form-element">
        <label htmlFor="country-select">Country:</label>
        <select id="country-select" />
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
    </div>
  );
};
export default CovidForm;
