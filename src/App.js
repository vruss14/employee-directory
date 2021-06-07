import React from "react";
import Header from "./components/Header";
import EmployeeResults from "./components/Results";
import Search from "./components/Search";
// import Table from "./components/Table";

function App() {
  return (
  <div>
    <Header />
    <Search />
    <EmployeeResults />
  </div>
  );
}

export default App;
