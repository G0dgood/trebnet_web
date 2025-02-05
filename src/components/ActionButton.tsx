import React from 'react';

interface PageProps {
	text: string;
	btn_prop: string;
	navigate: (path: string) => void; // Specify path parameter
}

const ActionButton: React.FC<PageProps> = ({ text, btn_prop, navigate }) => {
	return (
		<div className='btn_container' onClick={() => navigate('/login')}>
			<button id='btn' className={btn_prop}>{text}</button>
		</div>
	);
};

export default ActionButton;
