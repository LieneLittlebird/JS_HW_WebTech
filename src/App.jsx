/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/*
Name, LastName = Liene Putniņa
Student ID = lr12022 */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */

import "./App.css";
import data from "./data.js";
import CovidForm from "./Form/CovidForm";
import Table from "./Table/Table";

const App = () => (
  <>
    <h1>COVID-19 Statistics</h1>
    <div className="App">
      <CovidForm />
      <Table />
    </div>
  </>
);

export default App;
