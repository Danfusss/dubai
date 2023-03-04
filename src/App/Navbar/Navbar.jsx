import React from "react";

import "./Navbar.css";

export default function Navbar() {
  const isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    ios: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.ios() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };
  if (isMobile.any()) {
    document.body.classList.add("_touch");
    let menuArrows = document.querySelector(".menu_arrow");
    console.log(menuArrows);
    // if (menuArrows.length > 0) {
    //   console.log("2 " + menuArrows);
    //   for (let index = 0; index < menuArrows.length; index++) {
    //     const menuArrow = menuArrows[index];
    //     console.log("3 " + menuArrow);
    //     menuArrow.addEventListener("click", function () {
    //       menuArrow.parentElement.classList.toggle("._active");
    //     });
    // }
    // }
  } else {
    document.body.classList.add("_pc");
  }
  return (
    <div className="header">
      <div className="header-container">
        <a href="" className="header_logo"></a>
        <div className="header_menu menu">
          <div className="menu_icon">
            <span></span>
          </div>
          <nav className="navbar">
            <ul className="menu_list">
              <li className="aii ">
                <p className="menu_link">{"Buy"}</p>
                <span className="menu_arrow"></span>
                <ul className="menu_sub-list">
                  <li>
                    <div className="">
                      <a href="" className="menu_sub-link">
                        {"Category number one"}
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="">
                      <a href="" className="menu_sub-link">
                        {"Apartments in Dubai"}
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="">
                      <a href="" className="menu_sub-link">
                        {"Category number twenty five"}
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <a href="" className="menu_link">
                  {"Blog"}
                </a>
              </li>
              <li>
                <a href="" className="menu_link">
                  {"About"}
                </a>
              </li>
              <li>
                <a href="" className="menu_link">
                  {"Contact"}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
