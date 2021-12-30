import React from 'react'
import "../index.css"
import List from './shared/List'

function Navbar({item}) {
    return (
        <div className="listContainer">
            <List>
                <div>{item.id}</div>
                <div>{item.work}</div>
            </List>
        </div>

    )
}

export default Navbar
