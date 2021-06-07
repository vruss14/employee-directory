import React from "react";
import Container from "./Container";
import * as moment from 'moment';

function Table(props) {

    return (

        <Container>
            <div className="table-responsive">

                <table className="table table-hover text-center">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Location</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Date of Birth</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.employees.map((employee) => {

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

