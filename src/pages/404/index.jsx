import React from 'react';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../../components/Button';

export default function NotFoundPage() {
	return (
		<div className='min-h-screen flex items-center justify-center flex-col'>
			<h1 className='text-8xl font-bold text-gray-400'>404</h1>
			<h2 className='mt-4 font-lg'>Sorry, we couldn't find this page.</h2>
			<Link className='mt-4' to='/login'>
				<PrimaryButton>Go to Login Page</PrimaryButton>
			</Link>
		</div>
	);
}
