/*
PAGE FOR SIGN-IN
*/
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import loginF from '../../utils/loginFake';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const { push } = useHistory();
  const classes = useStyles();

  /* async function onSubmit(e) { */
  const onSubmit = async (e) => {
    /* Handle the submit buttom */
    e.preventDefault();

    setLoading(true);
    setError(null);
    try {
      const res = await loginF({ email, password });
      // eslint-disable-next-line no-console
      console.log('respuests SingIn --->', res);
      push({
        pathname: '/',
        state: res,
      });
      setLoggedIn(true);
      /*
      ESTO SE CAMBIA; CUANDO ESTE EL CONTEXTO Y DETECTE
      ENTRAR A ESTA PAGINA MADAR EL AVISO QUE YA SE ENCUENTRA LOGEADO
      */
      setEmail('');
      setPassword('');
    } catch (err) {
      setError('Incorrect email or password!');
      setEmail('');
      setPassword('');
    }
    setLoading(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {loggedIn ? (
          <>
            <Avatar className={classes.avatar}>OK</Avatar>
          </>
        ) : (
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
        )}
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          {error && <p>{error}</p>}
          <TextField
            autoComplete="email"
            autoFocus
            fullWidth
            id="email"
            label="Email Address"
            margin="normal"
            name="email"
            required
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            autoComplete="current-password"
            fullWidth
            id="password"
            label="Password"
            margin="normal"
            name="password"
            required
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            className={classes.submit}
            color="primary"
            fullWidth
            type="submit"
            variant="contained"
            disabled={loading}
          >
            Sign In
          </Button>
          <Grid container>
            {/* <Grid item xs>
              <Link href="!#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
            <Grid item>
              <Link href="/signup" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default SignInPage;
