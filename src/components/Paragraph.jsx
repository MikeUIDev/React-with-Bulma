import React from "react"

function Paragraph(props) {
  return (
    <div className="columns">
      <div className="column is-10 is-offset-1">
        <p>{props.paragraph}</p>
      </div>
    </div>
  );
}

export default Paragraph;