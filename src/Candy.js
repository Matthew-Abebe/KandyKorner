//The React component is imported here.

import React, { Component } from 'react';

//Candy is a class that is declared here.

class Candy extends Component {

    //This is the render method for the class Candy.

    render() {
        return (
            //JSX is returned. The props are passed and appear on the page.
            <div>
                {
                    this.props.candies.map(candy =>
                        <div key={candy.id}>
                            {candy.candyName}
                        </div>
                    )
                }
            </div>
        )
    }
}

//The class (or method) Candy is exported here.

export default Candy;