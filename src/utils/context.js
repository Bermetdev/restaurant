import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CustomContext = createContext();
export const Context = (props) => {
  const [menu, setMenu] = useState([]);
  const [reservation, setReservation] = useState([])
  const [menuItem, setMenuItem] = useState([]);
  const [message, setMessage] = useState([])
  const [preOrder, setPreOrder] = useState ([])
  

  const plusPreOrder = (id) => {
    setPreOrder(prev => prev.map(item => {
        if (menu.id === id) {
            return { ...menu, count: menu.count + 1 }
        }
      
        return menu
    }))
}
const minusPreOrder = (id) => {

    let count = preOrder.find(menu => menu.id === id).count

    if (count === 1) {
        setPreOrder(prev => prev.filter(menu => menu.id !== id))
    } else{
        setPreOrder(prev => prev.map(menu => {
            if (menu.id === id) {
                return { ...menu, count: menu.count - 1 }
            }
            return menu
        }))
    } 
    

}

  useEffect(() => {
    axios("http://localhost:8080/reservation").then(
      ({ data }) => setReservation(data),
    );
  }, [])

  console.log(reservation)

  useEffect(() => {
    axios("http://localhost:8080/preOrder").then(
      ({ data }) => setPreOrder(data),
    );
  }, [])

  useEffect(() => {
    axios("http://localhost:8080/message").then(
      ({ data }) => setMessage(data),
    );
  }, [])

  const handleMenu = () => {
    axios("http://localhost:8080/menu").then(
      ({ data }) => setMenu(data),
      setMenuItem([])
    );
  };

  const handleMenuItem = () => {
    axios("http://localhost:8080/menuItem").then(
      ({ data }) => setMenuItem(data),
      setMenu([])
    );
  };
 
  useEffect(() => {
    axios("http://localhost:8080/menu").then(({ data }) => setMenu(data));
  }, []);

    const value = {
    menu,
    menuItem,
    handleMenu,
    handleMenuItem,
    reservation,
    message,
    preOrder,
    plusPreOrder,
    minusPreOrder
  };

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};
