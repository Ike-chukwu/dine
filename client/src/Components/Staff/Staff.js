import React, { useState } from "react";
import "./Staff.scss";
import chef1 from "../../assets/images/staff/chef-1.jpg";
import chef2 from "../../assets/images/staff/chef-2.jpg";
import chef3 from "../../assets/images/staff/chef-3.jpg";
import chef4 from "../../assets/images/staff/chef-4.jpg";
import chef5 from "../../assets/images/staff/chef-5.jpg";
import guard1 from "../../assets/images/staff/guard-1.jpg";
import guard2 from "../../assets/images/staff/guard-2.jpg";
import chef7 from "../../assets/images/staff/chef-7.jpg";
import chef8 from "../../assets/images/staff/chef-8.jpg";
import chef9 from "../../assets/images/staff/chef-9.jpg";
import cleaner1 from "../../assets/images/staff/cleaner-1.jpg";
import cleaner2 from "../../assets/images/staff/cleaner-2.jpg";

const Staff = () => {

  const [activeStaff,setActiveStaff] = useState()
  const [index,setIndex] = useState(0)


  const staff = [
    {
      id: 0,
      name: "Wei",
      job: "Head Chef",
      image:chef1,
    },
    {
      id: 1,
      name: "Lucas",
      job: "Assitant head chef",
      image: chef2,
    },
    {
      id: 2,
      name: "Zoe ",
      job: "chef",
      image: chef3,
    },
    {
      id: 3,
      name: "Mia ",
      job: "chef",
      image: chef4,
    },
    {
      id: 4,
      name: "Owen",
      job: "chef",
      image: chef5,
    },
    {
      id: 5,
      name: "Lily",
      job: "chef",
      image: chef7,
    },
    {
      id: 6,
      name: "Liam ",
      job: "security",
      image: guard1,
    },
    {
      id: 7,
      name: "Ava",
      job: "security",
      image: guard2,
    },
    {
      id: 8,
      name: "Caleb ",
      job: "chef",
      image: chef8,
    },
    {
      id: 9,
      name: "Emma",
      job: "chef",
      image: chef9,
    },
    {
      id: 10,
      name: "Isaac",
      job: "janitor",
      image: cleaner1,
    },
    {
      id: 11,
      name: "Tim",
      job: "janitor",
      image: cleaner2,
    },
  ];

  const viewStaffPicture = (id) => {
        setActiveStaff(id)
        // const staffHoveredOnPosition = staff.findIndex((staff) => staff.id == activeStaff)
        setIndex(id)
  }

  return (
    <div className="team-details">
      <h1>Meet our staff</h1>
      <div className="team-content">
        <div className="people-img">
          <img src={index == null ?staff[0].image : staff[index].image} alt="" />
        </div>
        <div className="personal-details">
          {staff.map((staff, index) => {
           return <div className={staff.id == activeStaff ? "card hovered" :"card"} key={staff.id} onMouseOver={() => viewStaffPicture(staff.id)}>
              <p className="name">{staff.name}</p>
              <span className="position">{staff.job}</span>
              <div className="socials">
                <i className={staff.id == activeStaff ?"fab fa-facebook hovered":"fab fa-facebook"}></i>
                <i className={staff.id == activeStaff ?"fab fa-twitter hovered":"fab fa-twitter"}></i>
                <i className={staff.id == activeStaff ?"fab fa-twitter hovered":"fab fa-linkedin"}></i>
              </div>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Staff;
