import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CustomContext = createContext();
export const Context = (props) => {
  const [menu, setMenu] = useState([]);
  const [reservation, setReservation] = useState([])
  const [menuItem, setMenuItem] = useState([]);
  const [message, setMessage] = useState([])
  const [order, setOrder] = useState ([])

  useEffect(() => {
    axios("http://localhost:8080/reservation").then(
      ({ data }) => setReservation(data),
    );
  }, [])

  console.log(reservation)

  useEffect(() => {
    axios("http://localhost:8080/preOrder").then(
      ({ data }) => setOrder(data),
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
    order
  };

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};
