import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const [genres, setgenres] = useState("28");
  const [language, setlanguage] = useState("en");

  return (
    <div className="Container">
      <div className="Maincontainer">
        {/* Main section Starting */}

        <section>
          <div className="section1">
            <div className="read-left">
              <h4 className="h4-text">JOAQUIN PHOENIX</h4>

              <h1 className="h1-text">SMILE</h1>

              <h1 className="h1-text">AND PUT ON</h1>

              <h1 className="h1-text">A HAPPY FACE</h1>
              <br />
              <br />
              <button className="knowmore">KNOW MORE</button>
            </div>

            <div className="selection-right">
              <form className="align-right">
                <div className="options">
                  <label className="select-languaga">Choose your genres</label>
                  <select
                    id="genre"
                    className="option-genre"
                    value={genres}
                    onChange={(e) => setgenres(e.target.value)}
                  >
                    <option value="28">Action</option>
                    <option value="12">Adventure</option>
                    <option value="16">Animation</option>
                    <option value="35">Comedy</option>
                    <option value="80">Crime</option>
                    <option value="27">Horror</option>
                    <option value="18">Drama</option>
                    <option value="14">Fantasy</option>
                  </select>
                </div>

                <div className="options">
                  <label className="select-languaga">
                    Choose your language
                  </label>
                  <select
                    className="option-genre"
                    id="languages"
                    value={language}
                    onChange={(e) => setlanguage(e.target.value)}
                  >
                    <option value="en">English</option>
                    <option value="de">German</option>
                  </select>
                </div>

                <div className="options">
                  <Link to={{ pathname: "/quiz", state: [genres, language] }}>
                    <input
                      type="submit"
                      value="Go"
                      className="button-input"
                    ></input>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/* Main section ending */}
      </div>
    </div>
  );
}

export default Home;
