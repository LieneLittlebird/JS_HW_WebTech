import React from "react";

import "./form.css";

import data from "./../data.js";

const Form = ({ setFilteredData }) => {
  // habdle button cliks
  // setFilteredData(data.filter.magic)

  return (
    <div id="form">
      <div class="form-element">
        <label for="continent-select">Continent:</label>
        <select id="continent-select">
          <option value="All" selected>
            All
          </option>
        </select>
      </div>
      <div class="form-element">
        <label for="country-select">Country:</label>
        <select id="country-select"></select>
      </div>
      <div class="form-element">
        <label for="year-from">Year from:</label>
        <input type="text" id="year-from" placeholder="YYYY" />
      </div>
      <div class="form-element">
        <label for="week-from">Week from:</label>
        <input type="text" id="week-from" placeholder="Week number" />
      </div>
      <div class="form-element">
        <label for="year-till">Year till:</label>
        <input type="text" id="year-till" placeholder="YYYY" />
      </div>
      <div class="form-element">
        <label for="week-till">Week till:</label>
        <input type="text" id="week-till" placeholder="Week number" />
      </div>
      <div class="form-element">
        <label for="cases">Cases</label>
        <input type="radio" id="cases" name="indicator" value="cases" checked />
        <label for="deaths">Deaths</label>
        <input type="radio" id="deaths" name="indicator" value="deaths" />
      </div>
      <div class="form-element">
        <label for="search">Country search:</label>
        <input type="search" id="search" />
      </div>
      <div id="buttons" class="form-element">
        <button id="show-list">Show list</button>
      </div>
    </div>
  );
};

export default Form;
