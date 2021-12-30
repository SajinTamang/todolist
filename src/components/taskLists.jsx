import React from 'react'
import "../index.css"
import List from './shared/List'
import PropTypes from "prop-types";
function Navbar({item}) {
    return (
        <div className="listContainer">
            <List>
                <p>{item.id}
                {item.work}</p>
            </List>
        </div>

    )
}

Navbar.defaultProps={
    item:  [ {
        id:1,
        work: "This is default data",
    }]
}
Navbar.propTypes={
    item:PropTypes.object,
}

export default Navbar
