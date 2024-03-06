import React from "react"
import Link from "./Link"

function Job(props) {
  return (
      // <li className="listing">{props.listing}</li>
      <article>
        <div className="is-size-4 mb-1">
          {props.title} at <a href={props.titleLink} title={props.company}>{props.company}</a>
        </div>
        <div className="date mb-2">{props.date}</div>
        <p className="role">{props.description}</p>
{props.children}
        {/* <p>{<Link listing="hello" />}</p> */}
        
        {/* <ul className="job-skills">
          <li>{props.skill}</li>
        </ul> */}
      </article>
  );
}

export default Job;