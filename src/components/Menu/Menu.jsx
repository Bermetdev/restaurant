import React, { useContext, useEffect, useState } from "react";
import "./Menu.scss";
import { Parallax } from "react-parallax";
import axios from "axios";
import { CustomContext } from "../../utils/context";
import { NavLink, useNavigate } from "react-router-dom";
import { animateScroll } from "react-scroll";
import soup from "./image/soup.jpg";
 
const Menu = () => {

  const toTop = () => {
    animateScroll.scrollToTop({
      delay: 0,
      duration: 0,
    });
  };
  
  const {menu ,menuItem, handleMenu, handleMenuItem} = useContext(CustomContext) 

  const [searchItem, setSearchItem] = useState("")

  const filterData = menu.filter((item)=> item.name.includes(searchItem))

  return (
    <section>
      <div className="container">
      <Parallax strength={-300} bgImage={soup}>
        <div className="content">
          <div className="text-content">Menu</div>
        </div>
      </Parallax>

      {console.log(searchItem)}

      <div className="menu">
        <div className="menu__btn">
        <button className="btn" onClick={handleMenu}> All Menu</button>

        <button className="btn" onClick={handleMenuItem}> Category </button>

        <input type="search" name="" id="" value={searchItem} onChange={(e) => setSearchItem(e.target.value)}  placeholder="Search" />

        </div>

       
        {menuItem.map((el) => (
          <div className="menu__item">
            <div className="items__left">
              <img src={el.image} alt="" />
            </div>
            <div className="items__right">
              <div className="item__title"> {el.category}</div>
              <div className="items">
                <ul>
                  <li>
                    {el.product1} _______________{el.price} s
                  </li>
                  <li>
                    {el.product2}_________________{el.price2} s
                  </li>
                  <li>
                    {el.product3}______________{el.price3} s
                  </li>
                  <li>
                    {el.product4}__________{el.price4} s
                  </li>
                </ul>
                <NavLink onClick={() => toTop()} to={`${el.category}`}>
                  <button onClick={handleMenu}>View more</button>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
        <div className="menuall">
          {filterData
            .map((el) => (
              <div className="menu__items">
                <NavLink to={`/oneProduct/${el.id}`}>
                  <img
                    src={el.image}
                    style={{ width: 300, height: 360 }}
                    alt=""
                  />
                </NavLink>
                <h2>{el.name}</h2>
                <h3>{el.price} s</h3>
              </div>
            ))}
        </div>

       
      </div>
      </div>
    </section>
  );
};

export default Menu;
