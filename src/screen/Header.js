import React from "react";
import "./Header.css";
import logo from "../img/logo.png";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();

  let postdata = async () => {
    await axios
      .post("https://movie-quiz-node.herokuapp.com/")
      .then((res) => {
        console.log(res);
        if (res) {
          console.log(res.status);
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="headers">
      <div className="logo">
        <img onClick={postdata} src={logo} alt="Logo" />
      </div>
    </div>
  );
}

export default Header;
