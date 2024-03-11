import React from "react"

function ButtonBlue(props) {
  return (
    <a className="button is-info is-outlined is-rounded is-medium has-text-weight-normal" href={props.buttonLink} target={props.target}><span>{props.buttonName}</span></a>
  );
}

function ButtonRed(props) {
  return (
    <a className="button is-danger is-outlined is-rounded is-medium has-text-weight-normal" href={props.buttonLink} target={props.target}><span>{props.buttonName}</span></a>
  );
}

function ButtonNeon(props) {
  return (
    <a className="button custom-neon is-outlined is-rounded is-medium has-text-weight-normal" href={props.buttonLink} target={props.target}><span>{props.buttonName}</span></a>
  );
}

export { ButtonBlue, ButtonRed, ButtonNeon };