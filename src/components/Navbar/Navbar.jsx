import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <img src='https://www.svgrepo.com/show/426053/git.svg' className={s.logo} alt='logo' />
      <div className={s.nav_links}>
        <div className={s.nav_link}><NavLink to='/profiles' className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink></div>
        <div className={s.nav_link}><NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink></div>
        <div className={s.nav_link}><NavLink to='/news' className={navData => navData.isActive ? s.active : s.item}>News</NavLink></div>
        <div className={s.nav_link}><NavLink to='/music' className={navData => navData.isActive ? s.active : s.item}>Music</NavLink></div>
        <div className={s.nav_link}><NavLink to='/settings' className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink></div>
      </div>
      <div className={s.friends_bar}>
        <h3 className={s.friends_header}>Friends</h3>
        <div className={s.friends_items_list}>
          <div className={s.friends_item}>
            <div className={s.friend_icon}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTti2je5jP4NJyie2Gjynf4ZklgkTOOGdloLQ&usqp=CAU' alt='userIcon'" alt="user Icon" />
            </div>
            <div className={s.friend_name}>Ann</div>
          </div>
          <div className={s.friends_item}>
            <div className={s.friend_icon}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTti2je5jP4NJyie2Gjynf4ZklgkTOOGdloLQ&usqp=CAU' alt='userIcon'" alt="user Icon" />
            </div>
            <div className={s.friend_name}>Pete</div>
          </div>
          <div className={s.friends_item}>
            <div className={s.friend_icon}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTti2je5jP4NJyie2Gjynf4ZklgkTOOGdloLQ&usqp=CAU' alt='userIcon'" alt="user Icon" />
            </div>
            <div className={s.friend_name}>Nick</div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar; 