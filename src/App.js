import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import movieTrailer from "movie-trailer";
import ReactPlayer from "react-player";

function App() {
  const [video, setVideo] = useState("inception");
  const [videoURL, setVideoURL] = useState("https://youtu.be/sa9l-dTv9Gk");

  function handleSearch() {
    movieTrailer(video).then((res) => {
      setVideoURL(res);
    });
  }
  return (
    <div className="App">
      <div className="search-box">
        <label>Search for any movies/shows: </label>
        <input
          type="text"
          onChange={(e) => {
            setVideo(e.target.value);
          }}
        />
        <button onClick={() => handleSearch()}>Search</button>
      </div>
      <ReactPlayer url={videoURL} controls={true} />
    </div>
  );
}

export default App;
