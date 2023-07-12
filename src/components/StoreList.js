import React from "react"
import Store from "./Store"

function StoreList({storesArray}) {
// console.log(storesArray)
//display each store below
const storeList = storesArray.map((singleStore) => {
    return <Store key={singleStore.id} singleStore={singleStore}/>
})


    return(
        <table>
            <tbody>
                <tr>
                    <th className="row-name">
                        Name
                    </th>
                    <th>
                        Image
                    </th>
                    <th>
                        Season
                    </th>
                    <th>
                        Episode
                    </th>
                </tr>
                {storeList}
            </tbody>
        
        </table>
    );
}

export default StoreList;