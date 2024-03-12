import React from "react"
import ReactPlayer from "react-player/lazy";

function Project(props) {
  return (
    <div className="columns content is-medium mb-6">
      <div className="column is-12">
        <div className="card">
          <div className="card-image video-player">
            <ReactPlayer url={props.videoUrl} light={props.videoPoster} controls={true} width="612px" height="413px" />
          </div>
          {/* <div className="card-image">
            <video loading="lazy" playsInline muted controls className="video" poster={props.videoPoster} width="612" height="413">
              <source type="video/mp4" src={props.videoUrl}></source>
            </video>
              <img src={props.img} alt={props.name} title={props.name}></img>
          </div> */}
          <footer className="card-footer mt-4">
            <div className="card-footer-item mb-0 is-flex is-align-items-flex-start is-justify-content-flex-start is-flex-direction-column">
              <p className="link-width">
                {props.name}
                {/* <a href={props.link} alt={props.name} title={props.name} target="_blank" rel="noreferrer">{props.name} &nbsp; <FontAwesomeIcon className="fa-icon" icon={faExternalLink} size="xs"></FontAwesomeIcon> </a> */}
              </p>
              <p className="tag is-dark is-medium">{props.type}</p>
            </div>
            <div className="card-footer-item has-text-left is-flex is-align-items-flex-start is-justify-content-flex-start">
              <p className="is-small">
                {props.description}
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Project;