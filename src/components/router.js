import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AppBar, Button, CssBaseline, Toolbar, Typography, Box,IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ExitToApp, PersonAdd } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import Home from './Home';
import SignInSide from './SignInSide';
import SignUp from './SignUp'; 
import CardOptions from './CardOptions';
import TextArea from './TextArea';
import CodeEditor from './CodeEditor';
import QuestionCard from './QuestionCard/QuestionCard';


const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },

  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    textDecoration:'none',
    margin: theme.spacing(1, 1.5),
  },
}));

export default function UserRouter() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
      <AppBar position="static" color="red" elevation={0} className={classes.appBar}>
      
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            <Link to="/">
            <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            href="/"
          >
            <MenuIcon />
          </IconButton>
              {/* <img src={require('../assets/images/vuberlogo.png')} height="60" alt="logo" /> */}
            </Link>
          </Typography>
         
            {/* For sm-xl screen sizes */}
            <Box display={{ xs: 'none', sm: 'block' }}>
                <Link to="/logIn">
                 <Button href="#" color="primary"  text-decoration="none" variant="contained" className={classes.link}>Login</Button>
                </Link>
                <Link to="/register">
                  <Button href="#" color="primary" style={{textDecoration : 'none'}}variant="contained" className={classes.link}>Sign Up</Button>
                </Link>
            </Box>
            {/* for xs screen size */}
            <Box display={{ xs: 'block', sm: 'none' }}>
                <Link to="/logIn">
                  <Button href="#" color="primary">
                    <ExitToApp className={classes.link} />
                  </Button>
                </Link>
                <Link to="/register">
                  <Button href="#" color="primary">
                    <PersonAdd className={classes.link} />
                  </Button>
                </Link>
            </Box>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/login"><SignInSide/></Route>
        <Route path="/register"><SignUp /></Route>
        <Route path="/codeEditor"><CodeEditor /></Route>
        <Route path="/cardOptions"><CardOptions /></Route>
        <Route path="/textArea"><TextArea /></Route>
        <Route path="/questionCard"><QuestionCard /></Route>
        <Route exact path="/"><Home /></Route>
      </Switch>
      </Router>
    </React.Fragment>
  );
}