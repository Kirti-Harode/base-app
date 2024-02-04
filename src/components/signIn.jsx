import React, { useState } from "react";
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [newUser, setNewUser] = useState(false);
	const [isValidEmail, setIsValidEmail] = useState(true);
	const [isValidPassword, setIsValidPassword] = useState(true);

	const navigate = useNavigate();

	function validEmail(email) {
		if (email !== undefined && email !== null && email !== '') {
			let parts = email.split('@');
			if (!(parts.length === 2 && parts[1] && parts[1].split('.').length === 2)) {
				return false;
			}
		}
		return true;
	}

    return(
			<div style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start'
			}}>
				<h1 style={{
					fontSize: '36px',
					fontWeight: '700',
					fontFamily: 'Montserrat'
				}}> 
					Sign in 
				</h1>
				<h6 style={{
					margin: '10px 0',
					fontSize: '16px',
					fontWeight: '400',
					fontFamily: 'Lato'
				}}>
					Sign in to your account
				</h6>
				<div style={{
					border: 'none',
					margin: '20px 0'
				}}>
					<GoogleLogin
						onSuccess={credentialResponse => {
							navigate('/upload');
						}}
						onError={() => {
							return;
						}}
					/>
				</div>
				<div style={{
					width: '422.64px',
					height: '300px',
					borderRadius: '10px',
					backgroundColor: 'white',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
					paddingTop : '20px',
					paddingLeft : '20px',
					rowGap: '10px'
				}}>
					<h4 style={{
						fontFamily: 'Lato',
						fontSize: '16px',
						fontWeight: '400',
					}}>
						Email address
					</h4>
					<input 
						placeholder="Enter Email here " 
						value={email}
						onChange={(e) => {setEmail(e.target.value)}}
						style={{							
							fontFamily: 'Lato',
							fontSize: '14px',
							fontWeight: '400',
							width:' 356.77px',
							height: '43.91px',
							borderRadius: '10px',
							backgroundColor: '#F5F5F5',
							border: 'none',
							padding: '10px'
						}}>
					</input>
					{
						isValidEmail === false ? 
						<div style={{color: 'red', fontSize: '10px'}}>
							Enter a valid email
						</div> : <div></div>
					}
					<h4 style={{
						fontFamily: 'Lato',
						fontSize: '16px',
						fontWeight: '400',
					}}>
						Password
					</h4>
					<input 
						type='password'
						placeholder="Enter Password here "
						value={password}
						onChange={(e) => {setPassword(e.target.value)}}
						style={{							
							fontFamily: 'Lato',
							fontSize: '14px',
							fontWeight: '400',
							width:' 356.77px',
							height: '43.91px',
							borderRadius: '10px',
							backgroundColor: '#F5F5F5',
							border: 'none',
							padding: '10px'
						}}>
					</input>
					{
						isValidPassword === false ? 
						<div style={{color: 'red', fontSize: '10px'}}>
							Please enter password
						</div> : <div></div>
					}
					<button style={{
						fontFamily: 'Lato',
						fontSize: '16px',
						fontWeight: '400',
						color: '#346BD4',
						margin: '10px 0'
					}}>
						Forgot Password?
					</button>
					<button 
						style={{
							width: '356.77px',
							height: '43.91px',
							borderRadius: '10px',
							backgroundColor: '#605BFF',
							cursor: 'pointer',
							color: '#FFFFFF',
							fontFamily: 'Montserrat',
							fontSize: '16px',
							fontWeight: '700',
						}}
						onClick={() => {
							if(validEmail(email) === false || email.length === 0){
								setIsValidEmail(false);
							}else{
								setIsValidEmail(true);
							}
							setIsValidPassword(password.length !== 0);
							if(validEmail(email) && password.length !== 0){
								navigate('/upload');
							}
						}}
					>
						{newUser ? 'Sign Up' : 'Sign In'}
					</button>
				</div>
				<div style={{
					display: 'flex',
					alignSelf: 'center',
					padding: '10px 0',
					color: '#858585',
					fontFamily: 'Lato',
					fontSize: '16px',
					fontWeight: '400'
				}}> 
					Don't have a account? 
					<button 
						style={{padding: '0 5px', color: '#346BD4'}}
						onClick={() => {setNewUser(true)}} >Register here</button>
				</div>
			</div>
    )
  
}
