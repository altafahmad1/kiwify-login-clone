import React from 'react';

export default function PrimaryButton({
	className,
	containerClassName,
	onClick,
	children,
	...props
}) {
	return (
		<span className={'block w-full rounded-md shadow-sm ' + containerClassName}>
			<button
				{...props}
				onClick={onClick}
				className={
					'w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out ' +
					className
				}
			>
				{children}
			</button>
		</span>
	);
}
