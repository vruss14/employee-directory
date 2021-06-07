import React, { Component } from "react";
import Table from "./Table";
import API from "../utils/API";

class EmployeeResults extends Component {
  state = {
    employees: []
  };

  componentDidMount() {
    API.fetchRandomEmployees()
    .then(res =>
        this.setState({ employees: res.data.results })
    )
    .catch(err => console.log(err));
 
  }

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
        search: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <Table
        employees={this.state.employees}
        />
      </div>
    );
  }
}

export default EmployeeResults;
