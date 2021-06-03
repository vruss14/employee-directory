import React from "react";

function Header() {
    return (
        <div className="jumbotron jumbotron-fluid bg-dark">
            <div className="container text-white">
                <h1 className="display-4 text-center mb-3">Employee Directory</h1>
                <p className="lead text-center">An application that simulates a real-world employee
                directory through utilizing the Random User API.</p>
            </div>
        </div>
    );
}

export default Header;