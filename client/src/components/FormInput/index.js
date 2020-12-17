import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    padding: {
      marginTop: 12,
      marginLeft: 17
    },
  }));

function FormInput(props) {
    const classes = useStyles();
      return (
          <div>
              <form className={classes.padding} noValidate autoComplete="off">
                  <TextField {...props} id="standard-basic" label="Enter Book Name Here:" />
              </form>
          </div>
      );
  }
  
  export default FormInput