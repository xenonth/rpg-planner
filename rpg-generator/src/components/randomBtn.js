import React from "react";
import Button from 'react-bootstrap/Button'

function GenerateTown(props) {
  return (
    <Button variant="danger" onClick={props.onClick} className={`${props["data-value"]}`} {...props} />
  );
}

export default GenerateTown;