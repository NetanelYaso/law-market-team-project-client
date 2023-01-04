import {createContext,useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,

} from 'firebase/auth';
import { auth } from '../firebase/firebase';

const userAuthContext = createContext();

export function UserAuthProvider({children}){
  const [user, setUser] = useState('');
  

  const signUp =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const logIn = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)

  }
  const logOut = (email,password)=>{
    return signOut(auth)

  }
  function googleSignIn(){
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth,googleAuthProvider)
  }
  useEffect(()=>{
    const unsubscribed = onAuthStateChanged(auth,(currentUser)=>{
       setUser(currentUser);
 
     })
     return ()=>{unsubscribed()}
   },[])
 
   return(
     <userAuthContext.Provider value={{user,signUp ,logIn , logOut ,googleSignIn}}>
       {children}
     </userAuthContext.Provider>
   )
 }
 
 export function useUserAuth(){
   return useContext(userAuthContext);

};
