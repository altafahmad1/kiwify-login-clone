import React, { useEffect, useRef, useState } from 'react';
import { PrimaryButton } from '../../components/Button';
import { Input } from '../../components/Input';
import CheckBox from '../../components/Input/CheckBox';
import KiwifyLogo from './../../assets/kiwify-logo.png';

export default function SignupPage() {
	useEffect(() => {
		document.title = 'Cadastro';
	}, []);

	const [emailError, setEmailError] = useState(null);
	const [repeatEmailError, setRepeatEmailError] = useState(null);
	const [passwordError, setPasswordError] = useState(null);
	const [checkboxError, setCheckboxError] = useState(null);

	const emailRef = useRef();
	const repeatEmailRef = useRef();
	const passwordRef = useRef();
	const checkboxRef = useRef();

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
			console.log('HERE');
			setEmailError(null);
			emailRef.current.style.borderColor = '#e0e0e0';
		}
	};

	const validateRepeatEmail = () => {
		if (
			repeatEmailRef.current.value === '' ||
			repeatEmailRef.current.value !== emailRef.current.value
		) {
			if (
				repeatEmailRef.current.value === '' &&
				repeatEmailRef.current.value !== emailRef.current.value
			) {
				setRepeatEmailError(
					'Os dois e-mails devem ser iguais.\nEsse campo é obrigatório'
				);
			} else {
				setRepeatEmailError('Esse campo é obrigatório');
			}
			repeatEmailRef.current.style.borderColor = '#f44336';
		} else {
			setRepeatEmailError(null);
			repeatEmailRef.current.style.borderColor = '#e0e0e0';
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

	const validateCheckbox = () => {
		if (!checkboxRef.current.checked) {
			setCheckboxError('(Esse campo é obrigatório)');
			checkboxRef.current.style.borderColor = '#f44336';
		} else {
			setCheckboxError(null);
			checkboxRef.current.style.borderColor = '#e0e0e0';
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
						Criar nova conta
					</h2>{' '}
					<p className='mt-2 text-center text-base leading-5 text-gray-600'>
						Ou{' '}
						<a
							href='/signup?redirect=%2Flogin%C2%A0-'
							className='font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150'
						>
							entrar na sua conta existente
						</a>
					</p>
				</div>
				<div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
					<form className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
						<Input
							errorMessage={emailError}
							onBlur={validateEmail}
							inputRef={emailRef}
							label='E-mail'
							type='text'
						/>
						<Input
							onBlur={validateRepeatEmail}
							inputRef={repeatEmailRef}
							errorMessage={repeatEmailError}
							label='Repetir e-mail'
							type='text'
							containerClassName='mt-6'
						/>
						<Input
							onBlur={validatePassword}
							inputRef={passwordRef}
							errorMessage={passwordError}
							label='Senha'
							containerClassName='mt-6'
							type='password'
						/>
						<div className='mt-6'>
							<CheckBox
								inputRef={checkboxRef}
								errorMessage={checkboxError}
								onBlur={validateCheckbox}
							>
								Eu li e aceito os{' '}
								<a
									href='https://kiwify.com.br/termos-de-uso'
									target='_blank'
									class='underline'
								>
									termos de uso
								</a>
								,{' '}
								<a
									href='https://kiwify.com.br/licenca-de-uso-software'
									target='_blank'
									class='underline'
								>
									termos de licença de uso de software
								</a>
								,{' '}
								<a
									href='https://kiwify.com.br/politica-de-conteudo'
									target='_blank'
									class='underline'
								>
									política de conteúdo
								</a>{' '}
								da Kiwify
							</CheckBox>
						</div>
						<div className='mt-6'>
							<PrimaryButton>Criar conta</PrimaryButton>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
