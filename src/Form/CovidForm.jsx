/*
Name, LastName = Liene Putniņa
Student ID = lr12022 */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { useEffect, useState } from "react";

import "./form.css";

const CovidForm = ({
  originalData,
  setData,
  casesOrDeaths,
  setCasesOrDeaths,
}) => {
  const [continent, setContinent] = useState("All");
  const [country, setCountry] = useState("All");
  const [yearFrom, setYearFrom] = useState("");
  const [yearTill, setYearTill] = useState("");
  const [weekFrom, setWeekFrom] = useState("");
  const [weekTill, setWeekTill] = useState("");
  const [indicator, setIndicator] = useState(casesOrDeaths);
  const [countrySearch, setCountrySearch] = useState("");

  const [showYearFromErrorLabel, setShowYearErrorLabel] = useState(false);
  const [showYearTillErrorLabel, setShowYearTillErrorLabel] = useState(false);
  const [showWeekFromErrorLabel, setShowWeekFromErrorLabel] = useState(false);
  const [showWeekTillErrorLabel, setShowWeekTillErrorLabel] = useState(false);

  const processData = () => {
    let filteredData = originalData;

    if (continent !== "All") {
      filteredData = filteredData.filter(
        (item) => item.continent === continent
      );
    }

    if (country !== "All") {
      filteredData = filteredData.filter((item) => item.country === country);
    }

    if (yearFrom) {
      filteredData = filteredData.filter(
        (item) =>
          parseInt(item.year_week.slice(0, 4), 10) >= parseInt(yearFrom, 10)
      );
    }

    if (yearTill) {
      filteredData = filteredData.filter(
        (item) =>
          parseInt(item.year_week.slice(0, 4), 10) <= parseInt(yearTill, 10)
      );
    }
    if (weekFrom) {
      filteredData = filteredData.filter(
        (item) =>
          parseInt(item.year_week.slice(-2), 10) >= parseInt(weekFrom, 10)
      );
    }
    if (weekTill) {
      filteredData = filteredData.filter(
        (item) =>
          parseInt(item.year_week.slice(-2), 10) <= parseInt(weekTill, 10)
      );
    }

    setCasesOrDeaths(indicator);
    filteredData = filteredData.filter(
      (item) => item.indicator === indicator.toLowerCase()
    );

    setData(filteredData);
  };

  let continentOptions = [];
  let countryOptions = [];

  useEffect(() => {
    continentOptions = originalData
      .map((x) => x.continent)
      .filter((v, i, x) => x.indexOf(v) === i);

    countryOptions = originalData
      .map((x) => x.country)
      .filter((v, i, x) => x.indexOf(v) === i);
  }, [originalData]);

  return (
    <form id="form">
      <div className="form-element" id="continent">
        <label htmlFor="continent-select">Continent:</label>
        <select
          id="continent-select"
          value={continent}
          onChange={(event) => {
            setContinent(event.target.value);
          }}
        >
          <option value="All">All</option>
          {continentOptions.map((continentOption) => (
            <option key={continentOption} value={continentOption}>
              {continentOption}
            </option>
          ))}
        </select>
      </div>
      <div className="form-element" id="country">
        <label htmlFor="country-select">Country:</label>
        <select
          id="country-select"
          value={country}
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        >
          <option value="All">All</option>
          {countryOptions.map((countryOption) => (
            <option key={countryOption} value={countryOption}>
              {countryOption}
            </option>
          ))}
        </select>
      </div>
      <div className="form-element" id="year-from">
        <label htmlFor="year-from">Year from:</label>
        <input
          type="number"
          id="year-from"
          placeholder="YYYY"
          value={yearFrom}
          onChange={(event) => {
            if (event.target.value === "2020" || event.target.value === "2021")
              setShowYearErrorLabel(false);
            else setShowYearErrorLabel(true);
            setYearFrom(event.target.value);
          }}
          min={2020}
          max={2021}
          required
        />
        {showYearFromErrorLabel && (
          <label>Wrong input. Enter a number from 2020 till 2021</label>
        )}
      </div>
      <div className="form-element" id="year-till">
        <label htmlFor="year-till">Year till:</label>
        <input
          type="number"
          id="year-till"
          placeholder="YYYY"
          value={yearTill}
          onChange={(event) => {
            if (event.target.value !== "2020" || event.target.value !== "2021")
              setShowYearTillErrorLabel(true);
            else setShowYearTillErrorLabel(false);
            setYearTill(event.target.value);
          }}
          min={2020}
          max={2021}
          required
        />
        {showYearTillErrorLabel && (
          <label>Wrong input. Enter a number between from 2020 till 2021</label>
        )}
      </div>
      <div className="form-element" id="week-from">
        <label htmlFor="week-from">Week from:</label>
        <input
          type="number"
          id="week-from"
          placeholder="Week number"
          value={weekFrom}
          onChange={(event) => {
            if (event.target.value >= 1 && event.target.value <= 52)
              setShowWeekFromErrorLabel(false);
            else setShowWeekFromErrorLabel(true);
            setWeekFrom(event.target.value);
          }}
          min={1}
          max={52}
          required
        />
        {showWeekFromErrorLabel && (
          <label>Wrong input. Enter a number between 1 and 52</label>
        )}
      </div>
      <div className="form-element" id="week-till">
        <label htmlFor="week-till">Week till:</label>
        <input
          type="number"
          id="week-till"
          placeholder="Week number"
          value={weekTill}
          onChange={(event) => {
            if (event.target.value >= 1 && event.target.value <= 52)
              setShowWeekTillErrorLabel(false);
            else setShowWeekTillErrorLabel(true);
            setWeekTill(event.target.value);
          }}
          min={1}
          max={52}
          required
        />
        {showWeekTillErrorLabel && (
          <label>Wrong input. Enter a number between 1 and 52</label>
        )}
      </div>
      <div className="form-element" id="cases-deaths">
        <label htmlFor="cases">Cases</label>
        <input
          type="radio"
          id="cases"
          name="indicator"
          value="Cases"
          onChange={(event) => {
            setIndicator(event.target.value);
          }}
          checked={indicator === "Cases"}
        />
        <label htmlFor="deaths">Deaths</label>
        <input
          type="radio"
          id="deaths"
          name="indicator"
          value="Deaths"
          onChange={(event) => {
            setIndicator(event.target.value);
          }}
          checked={indicator === "Deaths"}
        />
      </div>
      <div className="form-element" id="country-search">
        <label htmlFor="search">Country search:</label>
        <input
          type="search"
          id="search"
          value={countrySearch}
          onChange={(event) => {
            setCountrySearch(event.target.value);
          }}
        />
      </div>
      <button
        id="show-list"
        type="button"
        className="form-element"
        onClick={processData}
        disabled={showYearFromErrorLabel}
        // disabled={showYearErrorLabel || contintError || dfgfgh}
      >
        Show list
      </button>
    </form>
  );
};
export default CovidForm;
