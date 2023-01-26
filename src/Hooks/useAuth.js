
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth"
import {auth} from '../Firebase'

//Split firebase authtication function into this file
const useAuth = () => {

	const logIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password)
	}

	const signUp =  (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password)
	}

	const logOut =  () => {
		return signOut(auth)
	}

	return {logIn,logOut,signUp}
}

export default useAuth