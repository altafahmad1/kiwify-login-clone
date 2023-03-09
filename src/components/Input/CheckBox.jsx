import React from 'react';
import './checkbox.css';

export default function CheckBox({
	children,
	errorMessage,
	inputRef,
	...props
}) {
	return (
		<label className='relative flex items-start mt-2'>
			<div className='flex items-center h-4 rounded hover:shadow-[0_0_0_3px_rgb(164,202,254,0.45)]'>
				<input
					ref={inputRef}
					{...props}
					type='checkbox'
					className='form-checkbox h-4 w-4 text-indigo-600 border-1 border-[#d2d6dc] border-none transition focus:outline-none duration-150 ease-in-out cursor-pointer'
				/>
			</div>{' '}
			<div class='ml-2 text-sm leading-5'>
				<span className='font-medium text-gray-700'>{children}</span>
				{errorMessage && (
					<div className='whitespace-pre mt-1 text-xs text-red-500'>
						{errorMessage}
					</div>
				)}
			</div>
		</label>
	);
}
