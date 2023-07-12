import React from "react"
import StoreList from "./StoreList";

function NewStoreForm({addNewStore}) {

    function handleSubmit(e){
        e.preventDefault();

        const newStoreData = {
            name: e.target["name"].value,
            image: e.target["image"].value,
            season: e.target["season"].value,
            episode: e.target["episode"].value
        }
        // console.log(newStoreData)

        e.target.reset();

        fetch("http://localhost:8085/stores", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newStoreData)
        })
        .then(res => res.json())
        .then(newStore => addNewStore(newStore))
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" id="name" placeholder="Store Name"/>
            <input type="text" id="image" placeholder="Image URL" />
            <input type="number" id="season" placeholder="Season" step="1"/>
            <input type="number" id="episode" placeholder="Episode" step="1"/>
            <button type="submit">Add Store</button>
        </form>
    )
}

export default NewStoreForm;