import { FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const facebookButton = document.querySelector('#facebookLogin');

facebookButton.addEventListener('click', async e => {
  e.preventDefault();

  const provider = new FacebookAuthProvider();

  try {
    const credentials = await signInWithPopup(auth, provider)
    console.log(credentials);
    console.log("facebook sign in");
    
    // Close the login modal
    const modal = bootstrap.Modal.getInstance(facebookButton.closest('.modal'));
    modal.hide();

    // show welcome message
    showMessage("Welcome" + credentials.user.email);
  } catch (error) {
    console.log(error);
  }

})