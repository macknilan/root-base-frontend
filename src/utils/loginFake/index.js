/*
  FILE WITH THE FAKE LOGIN
*/
const user = {
  email: 'mack@gmail.com',
  username: 'mack',
};
/* export async function loginF({ email, password }) { */
const loginF = ({ email, password }) =>
  new Promise((resolve, reject) => {
    if (email === 'mack@gmail.com' && password === 'password') {
      setTimeout(() => resolve(user), 2000);
    } else {
      reject();
    }
  });

export default loginF;
