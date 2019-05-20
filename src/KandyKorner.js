//The modules are imported here. StoreList, EmployeeList, CandyList, and Candy are all components.

import React, { Component } from 'react'
import StoreList from './StoreList'
import EmployeeList from './EmployeeList'
import CandyList from './CandyList'
import Candy from './Candy'

//Kandy is a class that is declared. Component is a default class from React. It is imported above.

class Kandy extends Component {

    //These are four arrays containing data.

    storeArray = [
        { id: 1, storeName: "Walmart" },
        { id: 2, storeName: "Target" },
        { id: 3, storeName: "Kmart" },
        { id: 4, storeName: "Walgreens" }
    ]

    employeeArray = [
        { id: 1, employeeName: "Jessica Younker" },
        { id: 2, employeeName: "Jordan Nelson" },
        { id: 3, employeeName: "Zoe LeBlanc" },
        { id: 4, employeeName: "Blaise Roberts" }
    ]
    candyTypeArray = [
        { id: 1, typeName: "Sour" },
        { id: 2, typeName: "Hard" },
        { id: 3, typeName: "Chocolate" },
        { id: 4, typeName: "Taffy" }
    ]

    candyArray = [
        { id: 1, candyName: "Sour Skittles" },
        { id: 2, candyName: "Gobstoppers" },
        { id: 3, candyName: "Snickers" },
        { id: 4, candyName: "Laffy Taffy" }
    ]

    //State is set equal to an object with four properties. 'this' references items in the class we are in.

    state = {
        stores: this.storeArray,
        employees: this.employeeArray,
        candyTypes: this.candyTypeArray,
        candies: this.candyArray
    }

    //This is the render method for the class Kandy.

    render() {
        return (
            //JSX is returned. The props are passed and appear on the page.
            <div>
                <StoreList stores={this.state.stores} />
                <EmployeeList employees={this.state.employees} />
                <CandyList candyTypes={this.state.candyTypes} />
                <Candy candies={this.state.candies} />
            </div>
        )
    }

}

//The class Kandy is exported here.

export default Kandy;