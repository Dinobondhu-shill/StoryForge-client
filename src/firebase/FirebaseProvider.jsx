import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import Swal from "sweetalert2";
import axios from "axios";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider()

const FirebaseProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

// create user with email and password
  const createUser = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
   //  Update User Profile
const updateUserProfile =(name, image)=>{
  return updateProfile(auth.currentUser, {
    displayName: name, 
    photoURL: image
  })
}
// Sign in user
const signIn =(email, password) =>{
  setLoading(true)
 return signInWithEmailAndPassword(auth, email, password)
 
}
  // google sign in
  const googleLogin = ()=>{
    setLoading(true)
   return signInWithPopup(auth, googleProvider)
   
  }
    // github Provider
    const githubLogin = ()=>{
      setLoading(true)
      return signInWithPopup(auth, githubProvider)
    }
  // facebook login
  const facebookLogin =() =>{
    setLoading(true)
    return signInWithPopup(auth, facebookProvider)
  }
    // log out user
    const logOut = ()=>{
      setUser(null)
      signOut(auth)
      .then(()=>{
        Swal('Log out successful')
      })
    }
  // observer
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user)
        setLoading(false)
        const loggedEmail = {email : user.email}
        // if(user){
         
        //   axios.post('https://storyforge-server.vercel.app/jwt', loggedEmail, {withCredentials:true})
        //   .then(res=>{
        //     console.log(res.data)
        //   })
        // }
          
    });
    return ()=> unsubscribe()
  }, []);
  
  const values = {
    createUser, 
    user,
    loading,
    updateUserProfile,
    signIn,
    logOut,
    facebookLogin,
    githubLogin, 
    googleLogin
    }
  
  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
};

export default FirebaseProvider;