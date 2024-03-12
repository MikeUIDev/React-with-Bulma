import React from "react"
import ReactPlayer from "react-player";
// import ReactPlayer from "react-player/youtube";

function Video(props) {
  return (
    <div className="video-player">
      <ReactPlayer url={props.videoUrl} light={props.videoPoster} controls={true} width="612px" height="413px" />
    </div>
  );
}

export default Video;