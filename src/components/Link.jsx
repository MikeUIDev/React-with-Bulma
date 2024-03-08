import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'

function Link(props) {
  return (
      <a href={props.urlLink} className="listing" target="_blank" rel="noreferrer">{props.listing} &nbsp; <FontAwesomeIcon className="fa-icon" icon={faExternalLink} size="xs"></FontAwesomeIcon></a>
  );
}

export default Link;