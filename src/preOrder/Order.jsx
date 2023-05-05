import React, { useContext, useState } from 'react';
import { CustomContext } from '../utils/context';
import axios from 'axios';
import "./Order.scss"

const Order = () => {

  const {menu} = useContext(CustomContext)
  const {order} = useContext(CustomContext)

//   const [preorder, setPreOrder] = useState([])
  const [selectedDishes, setSelectedDishes] = useState([]);
  console.log(selectedDishes);

  const handleDishSelection = (e) => {
    const dishName = e.target.name;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedDishes((prevState) => [...prevState, dishName]);
    } else {
      setSelectedDishes((prevState) =>
        prevState.filter((dish) => dish !== dishName)
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedDishes);
  }
    

  return (
    <form onSubmit={handleSubmit}>
      <h2>Pre-Order Menu</h2>
      <div className='menu'>
        {
  menu.map((el)=>(

    <div className="menu__items">
          <input
          type="checkbox"
          id=""
          name=""
          value=""
          onChange={handleDishSelection}
        />
        <label>Dish</label>
  <img src={el.image} style={{width: 300, height: 360}}  alt="" />   
  <h2 >{el.name}</h2>
<h3>{el.price} s</h3>
  </div>
  ))
  
}

      </div>
      <button type="submit">Pre-Order</button>

    </form>
  );
};


export default Order;