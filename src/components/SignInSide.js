import React, { useEffect, useState }  from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Avatar, Button, CssBaseline, TextField, Paper, Grid, Typography} from '@material-ui/core';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useLoginStyles from './customStyles/loginStyles';
// import { UserProvider } from './Contexts';
import useDetails from './useDetails';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import { CenterFocusStrong } from '@material-ui/icons';

export default function SignInSide() {
  let initVals = { email: '', password: '' };
  const [vals,setVal] = useState(initVals);
  const [warn,setWarn] = useState('');
  const [Res,setRes] = useState({});
  const history = useHistory();
  const { email, password } = vals;
  
  const [setData, getData, user] = useDetails();
  
  const responseGoogle = (response) => {
    console.log(response.nt.Ad);
  }

  useEffect(() => {
    const handler = async () => {
      await setData(Res);
      if (warn === 'Logged In') history.push('/dashboard');
    } 
    handler();
  }, [warn,Res])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal({...vals, [name]: value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:9000/login', { 
        email,
        password
      }).then((res) => {
        setRes(res.data.details);
        setWarn(res.data.msg);
      });
  };

  const classes = useLoginStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} lg={8} className={classes.image} >
        <img href="https://www.aitrades.com/Content/Newface/images/hero-login.jpg"/></Grid>
      <Grid item xs={12} sm={8} md={5} lg={4} component={Paper} elevation={6}  square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
            <GoogleLogin
    clientId="184577954974-pe1kq14kr8179el5q0nkkdhcfkk1iq50.apps.googleusercontent.com"
    buttonText="SignIn with Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
      
          <Typography component="h6" variant="h6">
            or
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Typography component="h6" variant="h6" className={warn !== '' ? classes.show : classes.hidden}>
              {warn}
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link to="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}