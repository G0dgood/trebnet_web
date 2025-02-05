import { ReactComponent as Avatar } from "../assets/svg/Avatar.svg"
import { ReactComponent as BlogPic1 } from "../assets/svg/BlogPic1.svg"
import { ReactComponent as BlogPic2 } from "../assets/svg/BlogPic2.svg"
import { ReactComponent as BlogPic3 } from "../assets/svg/BlogPic3.svg"


const LatestNews = () => {
	return (
		<section className='section_seven'>
			<div>
				{/* <div className="section_seven_inline">
					<div className="d-inline-flex">
						<h1>Our Latest </h1>
						<h1 className="accent-blue_text">News</h1>
					</div>
					<div className="d-inline-flex">
						<h1>and</h1>
						<h1 className="accent-blue_text">Blogs</h1>
					</div>
				</div> */}

				<div className='blog_card_container mt-5'>
					<div className='blog_card'>
						<div className='blog_card_inside'>
							<BlogPic1 />
						</div>
						<div className='blog_card_text_container'>
							<div>
								<h3 className='blog_card_text'>PLACE</h3>
							</div>
							<div className='blog_Avatar_container'>
								<Avatar />
								<div>
									<h6>YOUR BID REQUEST</h6>
									<p>Oct 19, 2021 • 5min read </p>
								</div>
							</div>
						</div>
					</div>
					<div className='blog_card'>
						<div className='blog_card_inside'>
							<BlogPic2 />
						</div>
						<div className='blog_card_text_container'>
							<div>
								<h3 className='blog_card_text'>PLACE</h3>
							</div>
							<div className='blog_Avatar_container'>
								<Avatar />
								<div>
									<h6>YOUR BID REQUEST</h6>
									<p>Oct 19, 2021 • 5min read </p>
								</div>
							</div>
						</div>
					</div>
					<div className='blog_card'>
						<div className='blog_card_inside'>
							<BlogPic3 />
						</div>
						<div className='blog_card_text_container'>
							<div>
								<h3 className='blog_card_text'>PLACE</h3>
							</div>
							<div className='blog_Avatar_container'>
								<Avatar />
								<div>
									<h6>YOUR BID REQUEST</h6>
									<p>Oct 19, 2021 • 5min read </p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default LatestNews
