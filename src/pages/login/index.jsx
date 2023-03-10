import React, { useEffect, useRef, useState } from 'react';
import { PrimaryButton } from '../../components/Button';
import { Input } from '../../components/Input';
import KiwifyLogo from './../../assets/kiwify-logo.png';

export default function LoginPage() {
	useEffect(() => {
		document.title = 'Login';
	}, []);

	const [emailError, setEmailError] = useState(null);
	const [passwordError, setPasswordError] = useState(null);

	const emailRef = useRef();
	const passwordRef = useRef();

	const validateEmail = () => {
		if (
			!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
				emailRef.current.value
			) ||
			emailRef.current.value === ''
		) {
			if (emailRef.current.value === '') {
				setEmailError('Esse campo é obrigatório');
			} else {
				setEmailError('O e-mail deve ser válido');
			}
			emailRef.current.style.borderColor = '#f44336';
		} else {
			setEmailError(null);
			emailRef.current.style.borderColor = '#e0e0e0';
		}
	};

	const validatePassword = () => {
		if (passwordRef.current.value === '') {
			setPasswordError('Esse campo é obrigatório');
			passwordRef.current.style.borderColor = '#f44336';
		} else {
			setPasswordError(null);
			passwordRef.current.style.borderColor = '#e0e0e0';
		}
	};

	return (
		<div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
			<div>
				<div className='sm:mx-auto sm:w-full sm:max-w-md'>
					<img
						src={KiwifyLogo}
						alt='Workflow'
						className='mx-auto h-12 w-auto'
					/>{' '}
					<h2 className='mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900'>
						Entrar na sua conta
					</h2>{' '}
					<p className='mt-2 text-center text-base leading-5 text-gray-600'>
						Ou{' '}
						<a
							href='/signup?redirect=%2Flogin%C2%A0-'
							className='font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150'
						>
							fazer cadastro
						</a>
					</p>
				</div>{' '}
				<div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
					<form className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
						<Input
							onBlur={validateEmail}
							errorMessage={emailError}
							validate
							inputRef={emailRef}
							label='E-mail'
							type='text'
						/>
						<Input
							onBlur={validatePassword}
							errorMessage={passwordError}
							inputRef={passwordRef}
							label='Senha'
							containerClassName='mt-6'
							type='password'
						/>
						<div className='mt-2 flex items-center justify-end'>
							<div className='text-sm leading-5'>
								<a
									href='/ResetPassword'
									className='font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150'
								>
									Esqueceu a senha?
								</a>
							</div>
						</div>{' '}
						<div className='mt-6'>
							<PrimaryButton>Entrar</PrimaryButton>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
