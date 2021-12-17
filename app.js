// import functions and grab DOM elements
import { signIn, signUp } from './fetch-utils.js';

const signInForm = document.querySelector('#sign-in-form');
const signOutForm = document.querySelector('#sign-out-form');
// let state

signInForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData();
    const username = data.get('username');
    const password = data.get('password');

   await signIn(username, password);

    // if (user) {
    //     window.location.href = './polls';
    //   } else {
    //     window.location.href = './';

    //   }
      window.location.href = './polls';
});

signOutForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData();
    const username = data.get('username');
    const password = data.get('password');

    await signUp(username, password);

    window.location.href = './polls';
});

// set event listeners
  // get user input
  // use user input to update state
  // update DOM to reflect the new state
