import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./SideBar.css";
import styled from "styled-components";

const Navbar = styled.div`
  .sidebar {
    border: 1px solid red;
    top: 30px;
    left: 10px;
    padding: 1rem;
    width: 236px;
    height: 451px;
    cursor: pointer;
    flex-grow: 1;
    background-color: pink;
  }
  .hide {
    display: none;
  }

  
  .menu {
    /* border: 1px solid black; */
    height: auto;
    width: auto;
    font-weight: bold;
    font-size: 30px;
    color: black;
    padding: 3px;
    box-sizing: border-box;

    &:hover {
        cursor: pointer;
  
        
    }
  }

  li {
    list-style-type: none;
    margin: 1rem 1rem;
    padding: 2rem;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    justify-items: center;
  }
  li:hover{
    border:1px solid red;
    font-size: 20px;
    background-color: white;
    border-radius: 12px;
  
  }
`;
function SideBar(props) {
  const [isClicked, setIsClicked] = useState(false);
  const menuClickHandeler = () => setIsClicked(!isClicked);
  const psClicked=()=>props.isClicked(true);
  const homeClicked=()=>props.isClicked(false);
  return (
    <Navbar>
      <div className="menu" onClick={menuClickHandeler}>
        &#9776;
      </div>
      <ul className={`${isClicked ? "sidebar" : "hide"}`}>
        <h2>Dibyojoti Mukherjee</h2>
        <li onClick={homeClicked}><Link to="/">Home</Link></li>
        {/* <li>Calender</li> */}
        <li><Link to="/projectStatus">Project Status</Link></li>
      </ul>
    </Navbar>
  );
}

export default SideBar;
