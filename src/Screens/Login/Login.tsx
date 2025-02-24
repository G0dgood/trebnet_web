import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();



	return (
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
						<div className='forget_container'>
							<p onClick={() => navigate('/forgetpassword')}>Forget password |</p>
							<p onClick={() => navigate('/createaccount')}>Create Account</p>
						</div>

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
	)
}

export default Login
