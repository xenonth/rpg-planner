import React from "react";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

function GenerateTown(props) {
  return (
    <Box m={1}>
      <Button variant="contained" color="secondary" onClick={props.onClick} className={`${props["data-value"]}`} {...props} />
    </Box>
  );
}

export default GenerateTown;