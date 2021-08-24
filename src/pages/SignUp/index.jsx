/*
  PAGE FOR SIGNUP
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

import { signUp } from '../../hooks/setSing';

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUpPage = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [errorFirstName, setErrorFirstName] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(null);
  const [errorUserName, setErrorUserName] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { push } = useHistory();

  const classes = useStyles();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const response = await signUp({
      email,
      firstName,
      userName,
      password,
      confirmPassword,
    });
    console.log('response --->', response);

    if (response.status === 201) {
      setFirstName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setUserName('');
      setLoading(true);
      push({ pathname: '/' });
    } else {
      setError(true);
      setErrorFirstName(response.errFirstNameMsg && response.errFirstNameMsg);
      setErrorEmail(response.errEmaildMsg && response.errEmaildMsg);
      setErrorPassword(response.errPasswordMsg && response.errPasswordMsg);
      setErrorConfirmPassword(
        response.errConfirmPasswordMsg && response.errConfirmPasswordMsg
      );
      setErrorUserName(response.errUserNameMsg && response.errUserNameMsg);
      setTimeout(() => {
        setError(false);
        setLoading(false);
        setErrorFirstName(null);
        setErrorEmail(null);
        setErrorPassword(null);
        setErrorConfirmPassword(null);
        setErrorUserName(null);
      }, 3000);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                autoFocus
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                required
                variant="outlined"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                error={Boolean(error)}
                helperText={errorFirstName && <span>{errorFirstName}</span>}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="email"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                required
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={Boolean(error)}
                helperText={errorEmail && <span>{errorEmail}</span>}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="current-password"
                fullWidth
                id="password"
                label="Password"
                name="password"
                required
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={Boolean(error)}
                helperText={errorPassword && <span>{errorPassword}</span>}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="confirm-password"
                fullWidth
                id="confirmPassword"
                label="Confirm Password"
                name="confirmPassword"
                required
                type="password"
                variant="outlined"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={Boolean(error)}
                helperText={
                  errorConfirmPassword && <span>{errorConfirmPassword}</span>
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="uname"
                fullWidth
                id="userName"
                label="User Name"
                name="userName"
                required
                variant="outlined"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                error={Boolean(error)}
                helperText={errorUserName && <span>{errorUserName}</span>}
              />
            </Grid>
          </Grid>
          <Button
            className={classes.submit}
            color="primary"
            disabled={loading}
            fullWidth
            type="submit"
            variant="contained"
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default SignUpPage;
