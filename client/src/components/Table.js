import React from 'react';

function Table({woman}){
    return(
        <tr>
            <td>{woman.name}</td>
            <td>{woman.country}</td>
            <td>{woman.searches}</td>
        </tr>
    )
}

export default Table;