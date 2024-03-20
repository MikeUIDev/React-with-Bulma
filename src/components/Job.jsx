import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightDots, faArrowUpShortWide, faExternalLink, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'

function Job(props) {
  return (
      // <li className="listing">{props.listing}</li>
      <article>
        <div className="is-size-5 mb-1 has-text-weight-bold">
          {props.title} at <a href={props.titleLink} title={props.company}>{props.company} <FontAwesomeIcon className="fa-icon" icon={faExternalLink} size="xs"></FontAwesomeIcon></a>
        </div>
        <div className="date mb-2">{props.date}</div>
        <p className="role">{props.description}</p>

        {/* <p>{<Link listing="hello" />}</p> */}

        {/* <ul className="job-skills">
          <li>{props.skill}</li>
        </ul> */}
      </article>
  );
}

export default Job;