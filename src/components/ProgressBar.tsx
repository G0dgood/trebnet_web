import ProgressBar from 'react-bootstrap/ProgressBar';

const Progress = ({ now }: any) => {
	return (
		<div>
			<ProgressBar now={now} />
		</div>
	);
};

export default Progress;
