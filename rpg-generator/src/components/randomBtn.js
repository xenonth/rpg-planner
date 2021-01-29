import React from "react";
import Button from '@material-ui/core/Button';

function GenerateTown(props) {
  return (
    <Button variant="contained" color="secondary" onClick={props.onClick} className={`${props["data-value"]}`} {...props} />
  );
}

export default GenerateTown;