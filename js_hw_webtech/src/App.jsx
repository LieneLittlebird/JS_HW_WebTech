import { useState } from "react";
import Form from "./Form/Form";
import "./App.css";
import data from "./data.js";
import Table from "./Table/Table";

const App = () => {
  const [filteredData, setFilteredData] = useState(null);

  return (
    <>
      <h1>COVID-19 Statistics</h1>
      <div className="App">
        <Form setFilteredData={setFilteredData} />
        {/* <Table filteredData={filteredData} /> */}
        <Table />
      </div>
    </>
  );
};

export default App;
