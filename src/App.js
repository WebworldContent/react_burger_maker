import React, {useState} from 'react';
import './App.css';
import Burger from './Components/Burger/Burger';
import Menu from './Components/Menu/Menu';

function App() {
  const [items, setItems] = useState([]);

  const handleItems = (value) => {
    setItems((prevValue) => [...prevValue, value]);
  };

  const handleItemDeletion = (value) => {
    if (items.length > 0) {
      setItems((prevValue) => {
        const copyItems = [...prevValue];
        return copyItems.filter((item, index) => copyItems.indexOf(value) !== index);
      })
    }
  };

  const resetAll = () => {
    if (items.length > 0) {
      setItems([]);
    }
  };

  return (
      <div className="App">
        <Menu addIngredients={handleItems} removeIngredients={handleItemDeletion} handleReset={resetAll}/>
        <Burger items={items} />  
      </div>
  );
}

export default App;
