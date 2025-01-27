import React from 'react'
import Bottom from '../../components/Bottom'
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();



	return (
		<div id="page-wrapper">
			<Bottom />
			<main>
				<div className="login_container">
					<div className="container_main">
						<div className="input_container"></div>
						<div className="input_container_two_main">
							<div className="input_container_two"></div>
							<div className="input_container_three">
								<input type="text" placeholder="Enter your email" />
								<input type="password" placeholder="Enter your password" />
							</div>
							<div className="input_container_forget">
								<p>Forget password | Create An Account</p>
								<div className='checkbox_container'>
									<input type="checkbox" id="rememberMe" />
									<label htmlFor="rememberMe">Remember me</label>
								</div>
							</div>
						</div>
						<div className="login_title_container" onClick={() => navigate('/project')}>
							<h2 className="login_title" >LOGIN</h2>
						</div>
					</div>
				</div>
			</main >
		</div>
	)
}

export default Login
