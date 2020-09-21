/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import "./Quiz.css";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import StarIcon from "@material-ui/icons/Star";
function Quiz(props) {
  let location = useLocation();
  let history = useHistory();
  const [data, setData] = useState([]),
    [pageRight, setPageRight] = useState(0),
    maxPage = data.length,
    [pageLeft, setPageLeft] = useState(0),
    [voteRight, setvoteRight] = useState(1),
    [voteLeft, setvoteLeft] = useState(1),
    [inputtextRight, setinputtextRight] = useState(""),
    [inputtextLeft, setinputtextLeft] = useState(""),
    [URLRIGHT, setURLRIGHT] = useState(false),
    [URLLEFT, setURLLEFT] = useState(false),
    [alldata, setalldata] = useState([]);

  //GET Request for movie
  let getdata = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=a48e10ff05ca0a624be184de24594386&language=${location.state[1]}&with_genres=${location.state[0]}`
      )
      .then((res) => {
        const movie = res.data.results;
        setData(movie);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Post Data to Database through Express
  let postdata = async () => {
    await axios
      .post("https://movie-quiz-node.herokuapp.com/movieupdate/new", alldata)
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          console.log(res.status);
          history.push("/dashboard");
        } else if (res.status === 405) {
          return alert("Please vote the movie");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // console.log(location)
    getdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="main-section">
        {/* section right */}
        <div className="section-right">
          <div className="section-content">
            {/* //maping start */}
            {data
              .reverse()
              .slice(pageRight * 1, 1 * (pageRight + 1))
              .map((value, key) => {
                const onNextPageRight = (e) => {
                  e.preventDefault();
                  if (URLRIGHT === true) {
                    console.log("working");
                    //setting old data to array from Left
                    setalldata([...alldata, inputtextLeft]);
                    //end
                    setURLRIGHT(false);
                    setvoteLeft(1);
                    //same data
                    setPageLeft((pageLeft + 1) % maxPage);
                    setinputtextRight({
                      id: value.id,
                      image: value.poster_path,
                      rating: value.vote_average,
                      name: value.title,
                      popularity: value.popularity,
                      release_date: value.release_date,
                      vote: voteRight,
                    });
                    setvoteRight(voteRight + 1);
                    setURLLEFT(true);
                    console.log(alldata);
                    //same data ending
                  } else {
                    setPageLeft((pageLeft + 1) % maxPage);
                    setinputtextRight({
                      id: value.id,
                      image: value.poster_path,
                      rating: value.vote_average,
                      name: value.title,
                      popularity: value.popularity,
                      release_date: value.release_date,
                      vote: voteRight,
                    });
                    setvoteRight(voteRight + 1);
                    setURLLEFT(true);
                    console.log(alldata);
                  }
                };
                return (
                  <div item {...{ key }}>
                    <div>
                      <div className="imgsize">
                        <img
                          src={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
                          alt="pop"
                          className="image__quiz"
                        />
                      </div>
                      <div className="imagetext">
                        <div className="iconalign">
                          <StarIcon className="staricon" />
                          <span className="rating">{value.vote_average}</span>
                        </div>
                        <h3 className="textstyleh3">{value.title}</h3>
                        <h3 className="textstyleh3">
                          Popularity : {value.popularity}
                        </h3>
                        <h3 className="textstyleh3">
                          Release Date: {value.release_date}
                        </h3>
                      </div>
                      <div className="vote">
                        <button
                          className="votebutton"
                          onClick={onNextPageRight}
                          disabled={pageLeft == Math.ceil(data.length / 1) - 1}
                        >
                          Vote
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            ;{/* //map array ending     */}
          </div>
        </div>

        {/* section Left */}
        <div className="section-left">
          <div className="section-content">
            {/* //maping start */}
            {data
              .reverse()
              .slice(pageLeft * 1, 1 * (pageLeft + 1))
              .map((value, key) => {
                const onNextPageLeft = (e) => {
                  e.preventDefault();
                  if (URLLEFT === true) {
                    console.log("working");
                    //setting old data to array from Right
                    setalldata([...alldata, inputtextRight]);
                    //end of sending url
                    setURLLEFT(false);
                    setvoteRight(1);
                    //same data
                    setPageRight((pageRight + 1) % maxPage);
                    setinputtextLeft({
                      id: value.id,
                      image: value.poster_path,
                      rating: value.vote_average,
                      name: value.title,
                      popularity: value.popularity,
                      release_date: value.release_date,
                      vote: voteLeft,
                    });
                    setvoteLeft(voteLeft + 1);
                    console.log(inputtextRight);
                    setURLRIGHT(true);
                    console.log(alldata);
                    //same data ending
                  } else {
                    setPageRight((pageRight + 1) % maxPage);
                    setinputtextLeft({
                      id: value.id,
                      image: value.poster_path,
                      rating: value.vote_average,
                      name: value.title,
                      popularity: value.popularity,
                      release_date: value.release_date,
                      vote: voteLeft,
                    });
                    setvoteLeft(voteLeft + 1);
                    console.log(inputtextRight);
                    setURLRIGHT(true);
                    console.log(alldata);
                  }
                };
                return (
                  <div item {...{ key }}>
                    <div>
                      <div className="imgsize">
                        <img
                          src={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
                          alt="pop"
                          className="image__quiz"
                        />
                      </div>
                      <div className="imagetext">
                        <div className="iconalign">
                          <StarIcon className="staricon" />
                          <span className="rating">{value.vote_average}</span>
                        </div>
                        <h3 className="textstyleh3">{value.title}</h3>
                        <h3 className="textstyleh3">
                          Popularity : {value.popularity}
                        </h3>
                        <h3 className="textstyleh3">
                          Release Date: {value.release_date}
                        </h3>
                      </div>
                      <div className="vote">
                        <button
                          className="votebutton"
                          onClick={onNextPageLeft}
                          disabled={pageRight == Math.ceil(data.length / 1) - 1}
                        >
                          Vote
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            ;{/* //map array ending     */}
          </div>
        </div>
      </div>
      <div className="finish__button">
        <button className="finish" onClick={postdata}>
          Finish
        </button>
      </div>
    </div>
  );
}
export default Quiz;
