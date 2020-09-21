import React from "react";
import "./Finalresult.css";

function finalresult({
  id,
  image,
  rating,
  name,
  popularity,
  release_date,
  vote,
}) {
  return (
    <div className="main_container">
      <div className="data__container">
        <img
          src={`https://image.tmdb.org/t/p/w500${image}`}
          alt=""
          className="image__dashboard"
        />

        <div className="data__form">
          <h5 className="font-leading"> {name}</h5>
          <h5 className="font-leading"> Rating : {rating}</h5>
          <h5 className="font-leading"> Popularity :{popularity}</h5>
          <h5 className="font-leading"> Release Data: {release_date}</h5>
          <h5 className="font-leading"> Your vote :{vote}</h5>
        </div>
      </div>
    </div>
  );
}

export default finalresult;
