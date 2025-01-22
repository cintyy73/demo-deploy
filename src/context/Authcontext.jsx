/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { GoogleAuthProvider } from "firebase/auth";
import { useToast } from "@chakra-ui/react";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
const toast= useToast()
const [user, setUser]= useState(null)
useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            setUser(uid);
            console.log('estaba logueado')
        } else {
            // User is signed out
            // ...
            console.log('no estaba logueado');
            setUser(null);
        }
    });
}, []);
  const registerUser = async  ({email, password})=>{
    try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);

		const { user } = userCredential;

		return user;
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;
		// ..
		console.log(errorCode, errorMessage);
	}
    
  }
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      console.log("Usuario autenticado:", user);
      return user;
    } catch (error) {
      console.error("Error en Google Sign-In:", error.message);
    }
  };

  const login = ({email, password}) => {
    signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			// ...
			console.log(user);
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;

			console.log(errorCode, errorMessage);
		});
  }

//         setError(null)
//     }else {
//         setError('El usuario o contraseña no coincide con nuestros regitros')
//     }
//   };

  const logout = () => {
        signOut(auth)
          .then(() => {
            // deleteStorage('order')
            toast({
              title: 'Sign off correct',
              status: 'info',
              isClosable: true,
              duration: 3000,
            })
          })
          .catch((error) => {
            console.log(error)
          })
      }

  return (
    <AuthContext.Provider value={{ user,login, registerUser, logout, signInWithGoogle }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)