import React, { useEffect } from 'react';
import { PrimaryButton } from '../../components/Button';
import { Input } from '../../components/Input';
import CheckBox from '../../components/Input/CheckBox';
import KiwifyLogo from './../../assets/kiwify-logo.png';

export default function SignupPage() {
	useEffect(() => {
		document.title = 'Cadastro';
	}, []);

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
						<Input label='E-mail' type='text' />
						<Input
							label='Repetir e-mail'
							type='text'
							containerClassName='mt-6'
						/>
						<Input label='Senha' containerClassName='mt-6' type='password' />
						<div className='mt-6'>
							<CheckBox>
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
