import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import Root from './Root';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: 'login',
				element: <LoginPage />,
			},
			{
				path: 'signup',
				element: <SignupPage />,
			},
		],
	},
]);
