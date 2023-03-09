import React from 'react';

export default function Input({
	className,
	label,
	labelClassName,
	containerClassName,
	inputRef,
	...props
}) {
	return (
		<div className={containerClassName}>
			{label && (
				<label
					className={
						'block text-sm font-medium leading-5 mb-1 text-gray-700 ' +
						labelClassName
					}
				>
					{label}
				</label>
			)}
			<div>
				<input
					{...props}
					className={
						'form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-[0_0_0_3px_rgb(164,202,254,0.45)] focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ' +
						className
					}
				/>
			</div>
		</div>
	);
}
