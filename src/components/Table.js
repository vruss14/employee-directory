import React from "react";
import Container from "./Container";
import * as moment from 'moment';

function Table(props) {

    const { employees, matchSearch } = props;

    // Sorted employees = an array of all employees that match the search (if specified)
    // The array is flattened, meaning that the sub-array that was nested is
    // flattened back into the parent array
    let sortedEmployees = [...matchSearch].flat();

    // If the search box is blank (if a user deleted a previous search)
    // this will revert the employees listed back to the original list pulled from the API

    if(props.value === "") {
        sortedEmployees = [...employees];
    }

    // This sorting function works by comparing the last names to each other
    // Two last names are passed in as arguments and compared against each other
    // -1 = the first last name (a) should come before the second (b)
    // 1 = the second last name (b) should come before the first (a)
    // 0 = the last names are identical

    // Switch from A-Z and Z-A
    if (props.direction === "Ascending") {
        sortedEmployees.sort((a, b) => {
            if (a.name.last < b.name.last) {
                return -1;
            } else if (a.name.last > b.name.last) {
                return 1;
            } else {
                return 0;
            }
        })
    } else if (props.direction === "Descending") {
        sortedEmployees.sort((a, b) => {
            if (a.name.last > b.name.last) {
                return -1;
            } else if (a.name.last < b.name.last) {
                return 1;
            } else {
                return 0;
            }
        })
    }

    return (

        <Container>
            <div className="table-responsive">

                <table className="table table-hover text-center">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col"><button className="btn btn-primary" onClick={props.reverseOrder}>Name</button></th>
                            <th scope="col">Location</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Date of Birth</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedEmployees.map((employee) => {

                            // For each of the 100 items in the array (employee data), this is the
                            // information that is pulled from the response and displayed in the table
                            // Moment is used to format birthdates. 

                            const imgSrc = employee.picture.thumbnail;

                            const { first, last } = employee.name;
                            const fullName = `${first} ${last}`;

                            const { city, state } = employee.location;
                            const fullLocation = `${city}, ${state}`;

                            const phoneNumber = employee.phone;

                            const email = employee.email;

                            const formattedBirthDate = moment(employee.dob.date).format('MM/DD/YYYY');

                            return (
                                <tr key = {employee.login.username}>
                                <th scope="row"><img src ={imgSrc} alt = "Employee portrait"/></th>
                                <td className = "align-middle">{fullName}</td>
                                <td className = "align-middle">{fullLocation}</td>
                                <td className = "align-middle">{phoneNumber}</td>
                                <td className = "align-middle">{email}</td>
                                <td className = "align-middle">{formattedBirthDate}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>


        </Container>
    );
}

export default Table;

