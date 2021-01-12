import React, { useState } from "react";
import "./styles.css";
// import "/github.svg";
// import "./pickit.svg";
export default function App() {
  const [source, setSource] = useState("happy.svg");
  const [yourDate, setDate] = useState("");
  const [showDisplay, setDisplay] = useState("block");
  const [message, setMessage] = useState("");

  function toggleDisplay() {
    setDisplay("none");
    console.log(showDisplay);
  }

  function resultAnnounce(event) {
    let dateSplit = yourDate.split("-");
    let day = parseInt(dateSplit[1]);
    let month = parseInt(dateSplit[2]);
    let year = parseInt(dateSplit[0]);
    let dateSum = day + month + year;
    let luck = event.target.value;
    if (dateSum % luck === 0) {
      setSource("happy.svg");
      setMessage("Congrats!! Your birthdate is lucky.");
    } else {
      setSource("sad.svg");
      setMessage("Better luck next birth :P");
    }
  }
  return (
    <div className="App">
      <div className="circle"></div>
      <div className="outer-box">
        <div className="content-box">
          <h1>Is your birthday lucky?</h1>
          <strong
            style={{
              fontSize: "16px"
            }}
          >
            (Don't worry its just an fun app.)
          </strong>

          <br />
          <ol>
            <li>Enter your Birthdate in first field.</li>
            <li>Enter your luck number in the second field.</li>
            <li>Find out if your birthday is lucky or not.</li>
          </ol>
          <input
            type="date"
            className="date-picker"
            onInput={(item) => setDate(item.target.value)}
          />
          <input
            type="number"
            id="lucky-number"
            onChange={(event) => resultAnnounce(event)}
          />
          <strong>{message}</strong>
        </div>
        <img src={source} alt="congo/oops" />
        <aside>
          Created by <a href="https://sakshamak.netlify.app/">Saksham</a> <br />
          <a href="https://www.instagram.com/sakshamak/?igshid=3fwihg3dq3y9">
            <img className="instagram" src="instagram.svg" />
          </a>
          <a href="https://www.linkedin.com/in/saksham-ak-55b9131b3/">
            <img className="linkedin" src="linkedin.svg" />
          </a>
          <a href="https://twitter.com/Saksham_ka">
            <img className="twitter" src="twitter.svg" />
          </a>
          <a href="https://github.com/sakshamAK">
            <img className="git" src="github.svg" />
          </a>
        </aside>
      </div>
      <div
        className="cookies"
        style={{
          display: showDisplay
        }}
      >
        This website do not use cookies to store data. The data entered by user
        is not saved anywhere.
        <button
          style={{
            padding: "10px 40px",
            margin: "0 30px",
            fontSize: "17px",
            borderRadius: "10px",
            border: "none",
            fontWeight: "bold",
            color: "#ea580c",
            cursor: "pointer"
          }}
          onClick={toggleDisplay}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
