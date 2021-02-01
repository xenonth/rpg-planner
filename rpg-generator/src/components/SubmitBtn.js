import React from "react";
import Button from '@material-ui/core/Button';
//wrapper to add padding as submit btn is stuck to bottom of authorValue input field
import Box from '@material-ui/core/Box';

function SubmitBtn(props) {
  return (
    <Box m={2}>
    <Button  variant='contained' color="secondary" type="submit" onClick={props.onClick} className={`${props["data-value"]}`} {...props} >
        SUBMIT
    </Button>
    </Box>
  );
}

export default SubmitBtn;

