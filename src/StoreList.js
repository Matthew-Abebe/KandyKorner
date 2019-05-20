//The React component is imported here.

import React, { Component } from 'react';

//StoreList is a class that is declared here.

class StoreList extends Component {

    //This is the render method for the class StoreList.

    render() {
        return (
            //JSX is returned. The props are passed and appear on the page.
            <div>
                {
                    this.props.stores.map(store =>
                        <div key={store.id}>
                            {store.storeName}
                        </div>
                    )}
            </div>
        )
    }
}

//The class (or method) StoreList is exported here.

export default StoreList;