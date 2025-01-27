import React, { ChangeEvent } from 'react';

interface InputProps {
	value: string;
	handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
	label: string;
	type: string;
	placeholder: string;
	verify: boolean;
}

const Input: React.FC<InputProps> = ({ value, handleOnChange, label, type, verify, placeholder }) => {
	return (
		<div className="login-form-group">
			<div className='label_container'>
				<label htmlFor="firstName" className="label">{label}</label>

				{verify &&
					<button className='verify_email'>Verify Email</button>
				}

			</div>
			<input
				id='settings-form-input'
				className="login-form-input mt-2"
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={handleOnChange}
			/>
		</div>
	);
};

export default Input;
