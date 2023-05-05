import React, { useContext, useState } from "react";
import { Parallax } from "react-parallax";
import axios from "axios";
import reserve from "./image/img2.jpg";
import "./Reservation.scss";
import { useNavigate } from "react-router-dom";
import { CustomContext } from "../../utils/context";

const Reservation = () => {
  const navigate = useNavigate();

  const {reservation} = useContext(CustomContext)

  const [person, setPerson] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [number, setNumber] = useState("");

  const [allDate, setAllDate] = useState([])
  // const [error, setError] = useState("")


  const postReservation = (e) => {
    e.preventDefault();

    
      const reservations = {
        person,
        date,
        time,
        name,
        email,
        phone,
        number
      };
     
      const isReserved = reservation.some(
        (reservation) => reservation.date === date
      );
      const isReservedTime = reservation.some(
        (reservation) => reservation.time === time
      );
     console.log(date)
     
       if(isReserved && isReservedTime){
        alert('занято')
       } else{
        axios
        .post("http://localhost:8080/reservation", reservations)
        .then(({ data }) => {
          setAllDate(data)
          setPerson("");
          setDate("");
          navigate("/");
          setTime("");
          setName("");
          setEmail("");
          setPhone("");
          setNumber("")
        });
       }
       
  };
  
  

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    const isReserved = reservation.some(
        (reservation) => reservation.date === selectedDate
      );
      if (isReserved ) {
        alert("This date is already reserved. Please select another date.");
        setDate("")
      } else {
        setDate(selectedDate);
      }
  }
  


  return (
    <section>
      <Parallax strength={-200} bgImage={reserve}>
        <div className="content2">
          <div className="text-content-rsv">Reservations</div>
          <form className="select" onSubmit={postReservation}>
            <div className="select__person">
              <select onChange={(e) => setPerson(e.target.value)}>
                <option value="" disabled>
                  {" "}
                  1 person{" "}
                </option>
                <option value="1 person">1 person</option>
                <option value="2 person">2 person</option>
                <option value="3 person">3 person</option>
                <option value="4 person">4 person</option>
                <option value="5 person">5 person</option>
                <option value="6 person">6 person</option>
                <option value="7 person">7 person</option>
                <option value="8 person">8 person</option>
              </select>

              <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              type="number"
              name=""
              id=""
              placeholder="Table number"
            />
              
            </div>
            <div className="select__date">
              <input value={date} onChange={(e)=>setDate(e.target.value)} type="date" />
            </div>
            <div
             
             
              className="select__time"
            >
              <input  value={time} type="time"  onChange={(e)=>setTime(e.target.value)} name="" id="" />
            </div>
            <h1>Personal Information</h1>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name=""
              id=""
              placeholder="Your name"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              name=""
              id=""
              placeholder="Your email"
            />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              name=""
              id=""
              placeholder="Your phone-number"
            />

            <button className="button" type="submit">
              {" "}
              Book a table
            </button>
          </form>
        </div>
      </Parallax>
    </section>
  );
};

export default Reservation;
