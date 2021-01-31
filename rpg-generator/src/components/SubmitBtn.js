import React from "react";
import Button from '@material-ui/core/Button';

function SubmitBtn(props) {
  return (
    <Button variant='contained' color="secondary" type="submit" onClick={props.onClick} className={`${props["data-value"]}`} {...props}>
        SUBMIT
    </Button>
  );
}

export default SubmitBtn;