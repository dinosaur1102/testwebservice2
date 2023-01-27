import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBoN4qbP6N_7HihOQmKJzLOEKlI4OjA5OY",
    authDomain: "easylogin-a3f72.firebaseapp.com",
    projectId: "easylogin-a3f72",
    storageBucket: "easylogin-a3f72.appspot.com",
    messagingSenderId: "1020546281255",
    appId: "1:1020546281255:web:ed68e3956f9a7702398302",
    measurementId: "G-8B2EYCN8RN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth();

const provider = new GoogleAuthProvider();




document.getElementById('googleimg').addEventListener('click', ()  =>{
    signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
    }).catch((error) => {
    // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
            // The email of the user's account used.
        const email = error.customData.email;
            // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
})


let loginBox = document.querySelector('.outBox');
let loginInputBox = document.querySelector('#emailid');
loginInputBox.addEventListener('keyup', function(){
    if(!loginInputBox.value == ''){
        //빈 값이 아닌 경우
        loginBox.classList.add('existence');   
    }else{
        //빈 값인 경우
        loginBox.classList.remove('existence');   
    }
});

let loginInputBo = document.querySelector('#passwordid');
loginInputBo.addEventListener('keyup', function(){
    if(!loginInputBo.value == ''){
        //빈 값이 아닌 경우
        loginBox.classList.add('exis');   
    }else{
        //빈 값인 경우
        loginBox.classList.remove('exis');   
    }
});


document.getElementById('LOGINBTN').addEventListener('click', (event) => {
    event.preventDefault();
    const signinemail = document.getElementById('emailid').value
    const signinpassword = document.getElementById('passwordid').value
    signInWithEmailAndPassword(auth, signinemail, signinpassword)
.then((userCredential) => {
    console.log(userCredential)
    const user = userCredential.user;
    alert("logged in")
    // ...
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
});

});
