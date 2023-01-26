import React, { useRef } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../Firebase'

const Auth = () => {
	const emailInput = useRef()
	const passwordInput = useRef()

	const submitHandler = e => {
		e.preventDefault()

		const email = emailInput.current.value
		const password = passwordInput.current.value

		signInWithEmailAndPassword(auth, email, password)
			.then(userCredential => {
				console.log(userCredential)
			})
			.catch(error => {
				console.log(error.message)
			})
	}

	return (
		<div>
			<form onSubmit={submitHandler}>
				<input ref={emailInput} type='email' placeholder='Email' />
				<input ref={passwordInput} type='password' placeholder='Password' />
				<button>Sign In</button>
			</form>
		</div>
	)
}

export default Auth
