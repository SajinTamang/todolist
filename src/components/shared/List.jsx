import React from 'react'
import PropTypes from "prop-types"

function List({children}) {
    return (
        <div className="list">
                {children}
        </div>
    )
}
List.propTypes= {
    children:PropTypes.node.isRequired,
}
export default List
