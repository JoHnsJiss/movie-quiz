import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import axios from "axios";
import Finalresult from "./Finalresult";

function Dashboard() {
  const [dashboardmovie, setdashboardmovie] = useState([]);

  //GET Request for movie
  let getdasboard = async () => {
    await axios
      .get(`https://movie-quiz-node.herokuapp.com/movieupdate/dashboard`)
      .then((res) => {
        const movie = res.data;
        setdashboardmovie(movie);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getdasboard();
  }, []);
  console.log(dashboardmovie);

  return (
    <div className="dasboard__container">
      <div className="sub__container">
        <div className="data__Result">
          <h1 className="font-leading"> Final Result</h1>
        </div>
        {dashboardmovie.map((value, index) => {
          return (
            <Finalresult
              key={index}
              id={value.id}
              image={value.image}
              rating={value.rating}
              name={value.name}
              popularity={value.popularity}
              release_date={value.release_date}
              vote={value.vote}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
