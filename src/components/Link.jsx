import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'

function Link(props) {
  return (
      <a href={props.urlLink} className="work-link" target="_blank" rel="noreferrer" title={props.altText} alt={props.altText}>{props.listing} &nbsp; <FontAwesomeIcon className="fa-icon" icon={faExternalLink} size="xs"></FontAwesomeIcon></a>
  );
}

export default Link;