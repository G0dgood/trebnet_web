import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
	const navigate = useNavigate();



	return (
		<div className="login_container">
			<div className="container_main">
				<div className="input_container"></div>
				<div className="input_container_two_main">
					<div className="input_container_two"></div>
					<div className="input_container_three">
						<input type="text" placeholder="Enter your email" />
					</div>
					<div className="input_container_forget">
						<div className='forget_container'>
							<p onClick={() => navigate('/login')}>Login</p>
						</div>

						<div className='checkbox_container'>
						</div>
					</div>
				</div>
				<div className="login_title_container" >
					<h2 className="login_title" >FORGET PASSWORD</h2>
				</div>
			</div>
		</div>
	)
}

export default ForgetPassword