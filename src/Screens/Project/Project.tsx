import React from 'react'
import Bottom from '../../components/Bottom'
import Header from '../../components/Header'
import { useNavigate } from 'react-router-dom';

function Project() {
	const navigate = useNavigate();

	return (
		<div id="page-wrapper">
			<Header />
			<Bottom />
			<main>
				<div className='project_card_conatiner'>
					<div className='project_card_top'>
						<div className='project_card_top_sub_one' >
							<h1>PROJECTS</h1>
						</div>
						<div className='project_card_top_details'>
							<p >
								Our plaform provides information on historical, on-going and proposed project which enable project owners to source key service provider
							</p>
							<button className='project_card_btn' onClick={() => navigate('/directory')}>SUBSCRIBE</button>
						</div>
					</div>

					<div className='project_card_second_main'>
						<div className='project_card_top'>
							<div className='project_card_top_sub_one_sub'>
								<h1>PROJECTS ONE</h1>
							</div>
							<div className='project_card_top_details_sub'>
								<p >
									Our plaform provides information on historical, on-going and proposed project which enable project owners to source key service provider
								</p>
								<button className='project_card_btn'>SUBSCRIBE</button>
							</div>
						</div>
						<div className='project_card_top'>
							<div className='project_card_top_sub_one_sub'>
								<h1>PROJECTS TWO</h1>
							</div>
							<div className='project_card_top_details_sub'>
								<p >
									Our plaform provides information on historical, on-going and proposed project which enable project owners to source key service provider
								</p>
								<button className='project_card_btn'>SUBSCRIBE</button>
							</div>
						</div>
						<div className='project_card_top'>
							<div className='project_card_top_sub_one_sub'>
								<h1>PROJECTS THREE</h1>
							</div>
							<div className='project_card_top_details_sub'>
								<p >
									Our plaform provides information on historical, on-going and proposed project which enable project owners to source key service provider
								</p>
								<button className='project_card_btn'>SUBSCRIBE</button>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Project
