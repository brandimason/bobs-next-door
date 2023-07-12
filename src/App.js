import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';
import { useEffect, useState} from 'react';

function App() {
const [storesArray, setStoresArray] = useState([])
// console.log(storesArray)

  useEffect(() => {
    fetch("http://localhost:8085/stores")
    .then(res => res.json())
    .then(data => setStoresArray(data))
  }, [])
  
  //set a callback function to add the new store state to display it
  function addNewStore(newStore){
    return ([...storesArray, newStore])
  }

  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search />
      <NewStoreForm addNewStore={addNewStore}/>
      <StoreList storesArray={storesArray}/>
    </div>
  );
}

export default App;
