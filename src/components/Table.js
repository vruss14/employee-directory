import React from "react";
import Container from "./Container";

function Table() {
    return (

        <Container>
            <div class="table-responsive">

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
                        <tr>
                            <th scope="row"><img src = "https://picsum.photos/100" alt = "Placeholder"/></th>
                            <td className = "align-middle">Mark Mullens</td>
                            <td className = "align-middle">Michigan</td>
                            <td className = "align-middle">111-111-1111</td>
                            <td className = "align-middle">mark@gmail.com</td>
                            <td className = "align-middle">01/11/1111</td>
                        </tr>
                        <tr>
                            <th scope="row"><img src = "https://picsum.photos/100" alt = "Placeholder"/></th>
                            <td className = "align-middle">Mark Mullens</td>
                            <td className = "align-middle">Michigan</td>
                            <td className = "align-middle">111-111-1111</td>
                            <td className = "align-middle">mark@gmail.com</td>
                            <td className = "align-middle">01/11/1111</td>
                        </tr>
                        <tr>
                            <th scope="row"><img src = "https://picsum.photos/100" alt = "Placeholder"/></th>
                            <td className = "align-middle">Mark Mullens</td>
                            <td className = "align-middle">Michigan</td>
                            <td className = "align-middle">111-111-1111</td>
                            <td className = "align-middle">mark@gmail.com</td>
                            <td className = "align-middle">01/11/1111</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="table-responsive">

                <table className="table table-hover text-center">
                    <thead className="thead-light">
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
                        <tr>
                            <th scope="row"><img src = "https://picsum.photos/100" alt = "Placeholder"/></th>
                            <td className = "align-middle">Mark Mullens</td>
                            <td className = "align-middle">Michigan</td>
                            <td className = "align-middle">111-111-1111</td>
                            <td className = "align-middle">mark@gmail.com</td>
                            <td className = "align-middle">01/11/1111</td>
                        </tr>
                        <tr>
                            <th scope="row"><img src = "https://picsum.photos/100" alt = "Placeholder"/></th>
                            <td className = "align-middle">Mark Mullens</td>
                            <td className = "align-middle">Michigan</td>
                            <td className = "align-middle">111-111-1111</td>
                            <td className = "align-middle">mark@gmail.com</td>
                            <td className = "align-middle">01/11/1111</td>
                        </tr>
                        <tr>
                            <th scope="row"><img src = "https://picsum.photos/100" alt = "Placeholder"/></th>
                            <td className = "align-middle">Mark Mullens</td>
                            <td className = "align-middle">Michigan</td>
                            <td className = "align-middle">111-111-1111</td>
                            <td className = "align-middle">mark@gmail.com</td>
                            <td className = "align-middle">01/11/1111</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Container>
    );
}

export default Table;

