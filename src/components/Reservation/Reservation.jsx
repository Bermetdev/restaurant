import React, { useContext, useState } from "react";
import { Parallax } from "react-parallax";
import axios from "axios";
import reserve from "./image/img2.jpg";
import "./Reservation.scss";
import { useNavigate, NavLink } from "react-router-dom";
import { CustomContext } from "../../utils/context";
import { animateScroll } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper"
import floorplan from './image/plan.jpg'
import outplan from './image/plan-outside.jpg'



const Reservation = () => {

  const toTop = () => {
    animateScroll.scrollToTop({
      delay: 0,
      duration: 0,
    });
  };


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
          navigate("/reservation");
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

            <button onClick={() => toTop()} className="button" type="submit">
              {""}
              Book a table
            </button>
          </form>
        </div>
      </Parallax>

      <div className="floorplan">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={true}
        modules={[Keyboard, Pagination, Navigation,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><div className='slide'>
        <img className="img" src={floorplan} alt="" />

            </div> 
             </SwiperSlide>
        <SwiperSlide> <div className='slide'>
        <img src={outplan} alt="" />
            </div></SwiperSlide>
      </Swiper>
      </div>
    </section>
  );
};

export default Reservation;
