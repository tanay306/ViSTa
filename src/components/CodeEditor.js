import React,{useState} from 'react';
import Editor from 'react-simple-code-editor';
import {Button} from '@material-ui/core';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

const CodeEditor = () =>{ 
const example = `import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <h1>Hello world</h1>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
`;
const[code,setCode]=useState(example);
  
const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      code, 
    };
  console.log(data);
}
 
    return (
    <div style={{ padding: '1%' }}>    
     <h2>Enter your code</h2>   
     <form onSubmit={handleSubmit} > 
      <Editor
        value={code}
        onValueChange={e => setCode((e))}
        highlight={code => highlight(code, languages.js)}
        padding={10}
        style={{ 
          fontSize: 18,
          backgroundColor: 'black',
          color: "white",
          maxHeight: '600px',
          height: '600px',
          overflowY: 'scroll' 
        }}
        
      />
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
           // className={classes.submit}
          >
            Submit
          </Button>
        
          </form>
      </div>
    );
  }

export default CodeEditor;