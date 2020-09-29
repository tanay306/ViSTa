import React,{useState} from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles} from '@material-ui/core/styles';
import {TextareaAutosize,Button} from '@material-ui/core';


const TextArea=()=>{

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    padding: '20px'
  },
  media:{
    height:500,
    width:500,
    padding:'1%',
    width: '100%',
    height: '600px !important',
    maxHeight: '600px !important',
    overflow: 'scroll !important'
  },
  submit: {
    margin: theme.spacing(1,1,1),
  },
  form: {
    
    alignItems: 'center'
  }
  
}));

  const classes = useStyles();
  const [text,setText]=useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      text, 
    };
  console.log(data);
  }
  return (
    <div className={classes.root}>
       <h2>Enter your response</h2>   
    <form onSubmit={handleSubmit} className={classes.form}>
    <TextareaAutosize className={classes.media}
     // rowsMax={200}
     // columnMax={1000}
      aria-label="maximum height"
      placeholder="Input your response"
      onChange={e => setText((e.target.value))}
      style={{ 
        fontSize: 20,
        
      }}
    />
     <div style={{display:"flex",justifyContent:"space-evenly",width:`50%`,margin:"auto"}}>
    <Button
            href="/cardOptions"
            halfWidth
            variant="contained"
            color="primary"
          // className={classes.submit}
          >
            Back
          </Button> 
   <Button
            type="submit"
            halfWidth
            variant="contained"
            color="primary"
            //className={classes.submit}
          >
            Submit
          </Button>
          </div>    
    </form>
   
   </div>  
  );
}


export default TextArea;