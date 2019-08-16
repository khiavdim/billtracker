import React from "react";
import "./Gallery.css";

function Gallery() {
  return (
    <div className="Gallery">
      <h1>CSS Positioning</h1>
      <div id="relative">
        this div is positioned relative to its normal position in the code
      </div>
      <div id="animation">
        this div is positioned relative with css animation
      </div>
      <div id="absolute">this div is positioned absolute</div>
      <div id="fixed">this div is positioned fixed</div>
      <p />
      <h1>HTML5</h1>
      <div>
        <video width="500" height="300" controls>
          <source
            src="https://docs.google.com/uc?export=download&id=1BaOI4oixOJ2EWdd_uq_fgQj6j6q7yizz"
            type="video/mp4"
          />
        </video>
      </div>
      <div>
        <audio controls>
          <source
            src="https://docs.google.com/uc?export=download&id=1BO-1mByS4zFFgze-nOFToP_CajD6I1jF"
            type="audio/mpeg"
          />
        </audio>
      </div>
      <p />
      <h1>EXPRESS STATIC FILE</h1>
      <img src="meme.jpeg" alt="static file" height="400px" width="400px" />
      <p />
      <p />
    </div>
  );
}

export default Gallery;
