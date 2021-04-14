/* Name, LastName = Liene Putniņa
Student ID = lr12022 */
/* eslint-disable react/react-in-jsx-scope */

/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/*
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */

import "./App.css";
import { useState } from "react";
import originalData from "./data.js";
import CovidForm from "./Form/CovidForm";
import Table from "./Table/Table";

const App = () => {
  const [filteredData, setFilteredData] = useState(originalData);
  const [casesOrDeaths, setCasesOrDeaths] = useState("Cases");
  return (
    <div id="app-components">
      <h1>COVID-19 Statistics</h1>
      <div className="App">
        <CovidForm
          originalData={originalData}
          setData={setFilteredData}
          casesOrDeaths={casesOrDeaths}
          setCasesOrDeaths={setCasesOrDeaths}
        />
        <Table data={filteredData} casesOrDeaths={casesOrDeaths} />
      </div>
    </div>
  );
};

export default App;
