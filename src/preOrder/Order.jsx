import React, { useContext, useState } from "react";
import { CustomContext } from "../utils/context";
import axios from "axios";
import { animateScroll } from "react-scroll";
import "./Order.scss";

const Order = () => {
  const toTop = () => {
    animateScroll.scrollToTop({
      delay: 0,
      duration: 0,
    });
  };

  const { menu } = useContext(CustomContext);
  const { preOrder, plusPreOrder, minusPreOrder } = useContext(CustomContext);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [count, setCount] = useState(false);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [product, setProduct] = useState([]);

  const postOrder = (e) => {
    e.preventDefault();

    setIsSubmitted(true);
    const order = {
      product,
      name,
      number,
    };

    axios.post("http://localhost:8080/preOrder", order).then(({ data }) => {
      setProduct("");
      setName("");
      setNumber("");
    });
  };

  const handleClick = () => {
    // setProduct([...product, el.name])
    setCount(true);
  };
  const [target , setTarget] = useState(null)
  console.log(target);
  console.log(product);
  const func = ( target , name ) =>{
    setProduct([...product, name])

  }

  return (
    <form onSubmit={postOrder}>
      <div className="menu">
        <h1>Pre-Order Menu</h1>
        <p className="order_p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          temporibus amet architecto!
        </p>
        <div className="menu__wrapper">
          {menu.map((el) => (
            <div className="menu__items">
              <img src={el.image} style={{ width: 300, height: 360 }} alt="" />
              <h2>{el.name}</h2>
              <h3>{el.price} s</h3>

              <button
              id={el.name}
                className="select__btn"
                type="button"
                // onClick={handleClick}
                // onClick={() => setProduct([...product, el.name])}
                onClick={(e) => func(e.target.id , el.name)}
              >
                {" "}
                <input type="checkbox" name="" id="" /> Select
              </button>
            </div>
          ))}
          {/* {preOrder.findIndex((product) => product === menu) > -1 ? (
            <div>
              <button type="button" onClick={() => plusPreOrder(menu.id)}>
                +
              </button>
              <button type="button" onClick={() => minusPreOrder(menu.id)}>
                -
              </button>
              <div className="count">
                {preOrder.find((product) => product.id === menu.id).count}
              </div>
            </div>
          ) : null} */}
        </div>

        <input
          className="info"
          value={name}
          type="text"
          name=""
          id=""
          placeholder="Your name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="info"
          value={number}
          type="number"
          name=""
          id=""
          placeholder="Table number"
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={() => toTop()} className="preOrder" type="submit">
          {" "}
          Pre-Order
        </button>
        {isSubmitted && <p className="request">Your order is sent! </p>}
      </div>
    </form>
  );
};

export default Order;
