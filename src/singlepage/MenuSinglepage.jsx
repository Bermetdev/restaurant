import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Parallax } from "react-parallax";
import { NavLink, useLocation, useParams } from "react-router-dom";
import "./MenuSinglepage.scss";
import menuimg from "./image/menu.jpg";
import { CustomContext } from "../utils/context";

const MenuSinglepage = () => {

    const {menu} = useContext(CustomContext)

    console.log(menu)

  let params = useLocation();
  let path = params.pathname.split("/").at(-1);
  console.log(path);
  return (
    <section>
      <div className="container">
      <Parallax strength={-100} bgImage={menuimg}>
        <div className="content">
          <div className="text-content"> Menu</div>
        </div>
      </Parallax>
      <div className="singlemenu">
        {menu
          .filter((el) => el.category === path)
          .map((el) => (
            <div className="item">
              <NavLink to={`/oneProduct/${el.id}`}>
                <img
                  src={el.image}
                  style={{ width: 300, height: 350 }}
                  alt=""
                />
              </NavLink>
              <h2>{el.name}</h2>
              <h3>{el.price} c</h3>
            </div>
          ))}
      </div>
      </div>
    </section>
  );
};

export default MenuSinglepage;
