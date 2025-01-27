import React from 'react'
import { useNavigate } from 'react-router-dom';
import DataService from '../../features/Auth/dataService';

const NotFound = () => {
	const dataService = DataService();
	const navigate = useNavigate();

	const handleNotFound = () => {
		navigate("/")
		dataService.clearData()
	}
	return (
		<div>
			<div className="center_found">
				<div className="error">
					<div className="number">4</div>
					<div className="illustration">
						<div className="circle"></div>
						<div className="clip">
							<div className="paper">
								<div className="face">
									<div className="eyes">
										<div className="eye eye-left"></div>
										<div className="eye eye-right"></div>
									</div>
									<div className="rosyCheeks rosyCheeks-left"></div>
									<div className="rosyCheeks rosyCheeks-right"></div>
									<div className="mouth"></div>
								</div>
							</div>
						</div>
					</div>
					<div className="number">4</div>
				</div>

				<p className="text">Oops. The page you're looking for doesn't exist.</p>
				<button className="btn" onClick={handleNotFound}>Back</button>
			</div>

		</div>
	)
}

export default NotFound
