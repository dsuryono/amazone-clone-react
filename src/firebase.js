// import * as firebase from 'firebase/app';
// import 'firebase/auth';

// const firebaseConfig = {
//   apiKey: 'AIzaSyBkfQpE1vq2tWd0Y4kMopCGQ6rNE2hPEfk',
//   authDomain: 'dsuryono-portfolios.firebaseapp.com',
//   databaseURL: 'https://dsuryono-portfolios.firebaseio.com',
//   projectId: 'dsuryono-portfolios',
//   storageBucket: 'dsuryono-portfolios.appspot.com',
//   messagingSenderId: '525270782576',
//   appId: '1:525270782576:web:59b5c81f70613a93085ab5',
//   measurementId: 'G-E47DQLQEYY',
// };

// firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth();

// export { auth };

import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBkfQpE1vq2tWd0Y4kMopCGQ6rNE2hPEfk',
  authDomain: 'dsuryono-portfolios.firebaseapp.com',
  databaseURL: 'https://dsuryono-portfolios.firebaseio.com',
  projectId: 'dsuryono-portfolios',
  storageBucket: 'dsuryono-portfolios.appspot.com',
  messagingSenderId: '525270782576',
  appId: '1:525270782576:web:59b5c81f70613a93085ab5',
  measurementId: 'G-E47DQLQEYY',
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
