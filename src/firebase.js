import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyCwmfU5qNb7oFH9clZGo-9Qg5FIFyaDnu8',
    authDomain: 'fir-crud-d3f71.firebaseapp.com',
    databaseURL: 'https://fir-crud-d3f71-default-rtdb.firebaseio.com',
    projectId: 'fir-crud-d3f71',
    storageBucket: 'fir-crud-d3f71.appspot.com',
    messagingSenderId: '678021029536',
    appId: '1:678021029536:web:4978bff5e2051297d633c5',
    measurementId: 'G-KZEFYSQZ70',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
