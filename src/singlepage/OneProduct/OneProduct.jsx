import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import './OneProduct.scss'

const OneProduct = () => {
  const [oneProduct, setOneProduct] = useState([]);
  const id = useParams()
  let params = useLocation();
  let path = params.pathname.split("/").at(-1);
  console.log(path);
  console.log(params)

  useEffect(() => {
    axios(`http://localhost:8080/menu/${path}`).then(({ data }) => setOneProduct(data));
  }, []);
  console.log(oneProduct)



  return (
    <section>
      <div className="container">
      <div className="product">
          {
             <div className="oneproduct">
             <img src={oneProduct.image} style={{ width: 300, height: 350 }} alt="" />
             <div className="info">
             <h2>{oneProduct.name}</h2>
             <h3>{oneProduct.price} c</h3>
             <h4> Состав: {oneProduct.ingredient}</h4>
             </div>
          
           </div>
          }
      </div>
      </div>
    </section>
  );
};

export default OneProduct;
