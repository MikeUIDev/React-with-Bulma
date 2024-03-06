import React from "react"


function Video(props) {
  return (
      <article>
        <video className="video" poster={props.videoPoster} width="600" height="300" controls="controls" autoplay="true" loading="lazy" loop muted>          
          <source type="video/mp4" src={props.videoURL}></source>
        </video>
      </article>
  );
}

export default Video;