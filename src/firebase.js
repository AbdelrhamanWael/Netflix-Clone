// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import  {   createUserWithEmailAndPassword , updateProfile , getAuth, signInWithEmailAndPassword , signOut} from "firebase/auth";
import { addDoc, collection, getFirestore} from "firebase/firestore"
import {toast} from 'react-toastify'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6mmzwt6EuM078qX63uoHsbUcU81o8v1U",
  authDomain: "netflix-clone-ce84e.firebaseapp.com",
  projectId: "netflix-clone-ce84e",
  storageBucket: "netflix-clone-ce84e.firebasestorage.app",
  messagingSenderId: "151024395807",
  appId: "1:151024395807:web:7a21a053dd61b4d24b572a",
  measurementId: "G-ZD23P74YC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app)
const signup = async (name , email , password )=>{
  try{
    const res = await createUserWithEmailAndPassword(auth , email , password)
    const user = res.user
    await addDoc(collection(db , "users"),{
      uid:user.uid,
      name,
      authProvider:"local",
      email
    })
    await updateProfile(user , {
      displayName : name
    })
  }catch(err){
    console.log(err)
    const errorMessage = err.code.split("/")[1].split("-").join(" ")
    toast.error(errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1))
  }
}
const login = async(email , password)=>{
  try{
    await signInWithEmailAndPassword(auth , email , password)

  }catch (error){
    console.log(error)
    const errorMessage = error.code.split("/")[1].split("-").join(" ")
    toast.error(errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1))
  }
}
const logout = ()=>{
  signOut(auth)
}
export {auth , db , signup , login , logout}