//The React component is imported here.

import React, { Component } from 'react';

//EmployeeList is a class that is declared here.

class EmployeeList extends Component {

    //This is the render method for the class CandyList.

    render() {
        return (
            //JSX is returned. The props are passed and appear on the page.
            <div>
                {
                    this.props.employees.map(employee =>
                        <div key={employee.id}>
                            {employee.employeeName}
                        </div>
                    )}
            </div>
        )
    }
}

//The class (or method) EmployeeList is exported here.

export default EmployeeList;