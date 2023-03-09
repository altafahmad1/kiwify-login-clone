import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

export default function Root() {
	const navigate = useNavigate();

	useEffect(() => {
		if (window.location.pathname === '/') {
			navigate('login');
		}
	});

	return (
		<div>
			<Outlet />
		</div>
	);
}
