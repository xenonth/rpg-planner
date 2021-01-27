import React from "react";
import Button from 'react-bootstrap/Button'

function SubmitBtn(props) {
  return (
    <Button variant="danger" type="submit" onClick={props.onClick} className={`${props["data-value"]}`} {...props}>
        SUBMIT
    </Button>
  );
}

export default SubmitBtn;