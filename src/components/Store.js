import React from 'react'

function Store({singleStore}) {
    // console.log(singleStore)
    return (
    <tr>
        <td className="row-name">
            <span>{singleStore.name}</span>
        </td>
        <td>
            <a href={singleStore.image} target="_blank"><b>&#8599;</b></a>
        </td>
        <td>
            <span>{singleStore.season}</span>
        </td>
        <td>
            <span>{singleStore.episode}</span>
        </td>
    </tr>
    );
}

export default Store