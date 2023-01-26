import React, { useRef, useState } from 'react'
import useAuth from '../../Hooks/useAuth'
import { TextField, Box, Button, Link } from '@mui/material'
import Style from './Auth.module.css'

const checkAuth = () => {
	const userCredentials = localStorage.getItem('userCredentials')
	if (userCredentials) return true

	return false
}

const Auth = ({ children }) => {
	console.log(children)
	const emailInput = useRef()
	const passwordInput = useRef()
	const rePasswordInput = useRef()

	const [user, setUser] = useState(null)
	const [error, setError] = useState(null)
	const [isRegistered, setIsRegistered] = useState(true)
	const [isLoggedIn, setIsLoggedIn] = useState(checkAuth())

	const { logIn, logOut, signUp } = useAuth()

	const submitHandler = e => {
		e.preventDefault()

		const email = emailInput.current.value
		const password = passwordInput.current.value

		if (isRegistered) {
			logIn(email, password)
				.then(res => {
					setUser(res.user)
				})
				.catch(err => {
					setError(err)
				})
		} else {
			//TODO:use login instead
			signUp(email, password)
				.then(res => {
					setUser(res.user)
					setIsLoggedIn(true)
					localStorage.setItem('userCredentials', JSON.stringify(res.user))
				})
				.catch(err => {
					setError(err)
				})
		}
	}

	return (
		<>
			{isLoggedIn ? (
				children
			) : (
				<div className={Style.auth}>
					<Box className={Style.form} component='form'>
						<TextField
							ref={emailInput}
							id='outlined-basic'
							label='Email'
							variant='outlined'
							size='small'
							required
						/>
						<TextField
							ref={passwordInput}
							id='outlined-basic'
							label='Password'
							variant='outlined'
							size='small'
							required
						/>
						{isRegistered || (
							<TextField
								ref={rePasswordInput}
								id='outlined-basic'
								label='Confirm Password'
								variant='outlined'
								size='small'
								required
							/>
						)}
						<Button onClick={submitHandler} variant='contained'>
							{isRegistered ? 'Sign In' : 'Sign Up'}
						</Button>
					</Box>
					<div className={Style.link}>
						{isRegistered ? (
							<span>Don't have an account yet? </span>
						) : (
							<span>Have an account already? </span>
						)}
						<Link href='#' onClick={() => setIsRegistered(prev => !prev)}>
							Hurry Up!
						</Link>
					</div>
				</div>
			)}
		</>
	)
}

export default Auth
