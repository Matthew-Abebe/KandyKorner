//The React component is imported here.

import React, { Component } from 'react';

//CandyList is a class that is declared here.

class CandyList extends Component {

    //This is the render method for the class CandyList.

    render() {
        return (
            //JSX is returned. The props are passed and appear on the page.
            <div>
                {
                    this.props.candyTypes.map(candyType =>
                        <div key={candyType.id}>
                            {candyType.typeName}
                        </div>
                    )
                }
            </div>
        )
    }
}

//The class (or method) CandyList is exported here.

export default CandyList;