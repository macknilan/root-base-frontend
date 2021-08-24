/*
    HOOK THAT IS IN CHARGE OF CREATING THE CONTEXT FOR 
    THE USER WHEN ITS LOGIN
*/
import axios from '@axios';
import { SIGIN_USER, SIGNUP_USER } from '@endpoints';

const signIn = async ({ email, password }) => {
  const auth = {
    email,
    password,
  };

  try {
    /* const response = await axios.post(SIGIN_USER, auth); */
    const { data, status, statusText } = await axios.post(SIGIN_USER, auth);
    return { data, status, statusText };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('🔥 error signin 🔥');
    const err = {
      errEmailMsg:
        typeof error.response.data.email === 'undefined'
          ? null
          : error.response.data.email[0],
      errPasswordMsg:
        typeof error.response.data.password === 'undefined'
          ? null
          : error.response.data.password[0],
    };
    return err;
  }
};

const signUp = async ({
  firstName,
  email,
  password,
  confirmPassword,
  userName,
}) => {
  const formSignUp = {
    email,
    first_name: firstName,
    username: userName,
    password,
    password_confirmation: confirmPassword,
  };

  try {
    const { data, status, statusText } = await axios.post(
      SIGNUP_USER,
      formSignUp
    );
    return { data, status, statusText };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('🔥 error signup 🔥');
    const err = {
      errFirstNameMsg:
        typeof error.response.data.first_name === 'undefined'
          ? null
          : error.response.data.first_name[0],
      errEmaildMsg:
        typeof error.response.data.email === 'undefined'
          ? null
          : error.response.data.email[0],
      errPasswordMsg:
        typeof error.response.data.password === 'undefined'
          ? null
          : error.response.data.password[0],
      errConfirmPasswordMsg:
        typeof error.response.data.password_confirmation === 'undefined'
          ? null
          : error.response.data.password_confirmation[0],
      errUserNameMsg:
        typeof error.response.data.username === 'undefined'
          ? null
          : error.response.data.username[0],
    };
    return err;
  }
};

export { signIn, signUp };
