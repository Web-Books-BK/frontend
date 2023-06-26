import React from "react";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import avatar from "../../assets/images/avatar.jpg";
import { MdLanguage } from "react-icons/md";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div
      style={{
        height: "80px",
        width: "100%",
        display: "flex",
        top: "0px",
        background: "#fff",
        position: "fixed",
        zIndex: 2,
        borderBottom: "1px solid #ccc",
        paddingBottom: "16px",
      }}
    >
      <div style={{ margin: "auto 20px" }}>
        <img
          src={logo}
          alt="logo"
          height="40px"
          width="150px"
          style={{ cursor: "pointer" }}
          onClick={() => handleClick("/")}
        />
      </div>

      <Search />

      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          display: "flex",
          flexDirection: "row",
          rowGap: "5px",
        }}
      >
        <div
          className="airbnb_home"
          style={{ fontSize: "1rem", cursor: "pointer", padding: "10px" }}
          c
          onClick={() => handleClick("/hosts")}
        >
          Your home
        </div>
        <div
          className="language"
          style={{
            padding: 5,
            marginLeft: "40px",
            marginRight: "40px",
            cursor: "pointer",
            display: "flex",
            flexDirection: "row",
            gap: "4px",
          }}
        >
          <MdLanguage size={24} />
          <div>EN</div>
        </div>
        <div>
          <UserMenu />
        </div>
      </div>

      <div
        style={{ margin: "auto", alignItems: "center", textAlign: "center" }}
      >
        <img
          src={avatar}
          alt="logo"
          height="40px"
          width="40px"
          style={{ borderRadius: 100 }}
        />
        <div></div>
      </div>
    </div>
  );
}
