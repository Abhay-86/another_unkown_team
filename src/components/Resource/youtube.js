import React from "react";
// import PropTypes from "prop-types";
import classes from "./Resource.css";

export default function YoutubeEmbed({ embedId }) {
  return (
    // <div style={{ position: "relative", left: "22.75rem" }}>
    <div className={classes["video-responsive"]}>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
    // </div>
  );
}
