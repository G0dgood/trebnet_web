// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Progress from '../../components/ProgressBar';
import Bottom from '../../components/Bottom';
// import Header from '../../components/Header';
// import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

// import { FaAppleAlt } from "react-icons/fa";
// import { FaBriefcase } from "react-icons/fa";
// import { IoLocationOutline } from "react-icons/io5";

import Navbar from "../../components/Navbar"
import ExclusiveBenefits from '../ExclusiveBenefits';
import FAQ from "../FAQ"
import Footer from "../Footer"
import GetYours from "../GetYours"
import LatestNews from "../LatestNews"


// const Home = () => { 

// 	return (
// 		<div id="page-wrapper">
// 			<Header />
// 			<Bottom />
// 			<main>
// 				<div className="gradient_home">
// 					<div className="parallax_container">
// 						<div className="parallax_tabs">
// 							{["PROJECTS", "DIRECTORY", "MEDIA", "TRANSACTIONS"].map((tab) => (
// 								<span
// 									key={tab}
// 									className={`tabs ${activeTab === tab ? "active_tabs" : ""}`}
// 									onClick={() => setActiveTab(tab)}
// 								>
// 									{tab}
// 								</span>
// 							))}
// 						</div>
// 						<div className="parallax">
// 							<div className="safe-area-view">
// 								<div className="overlay">
// 									<p className="title">
// 										Our platform provides a guide for the sourcing, selection, and engagement of real-estate service providers
// 									</p>
// 								</div>
// 								<button className="login-btn" onClick={() => navigate('/login')}>Login</button>
// 								<h1 className="ads-title">Place Your ADS HERE!</h1>
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				<div className="parallax-scroll-view">
// 					<div className="title-container">
// 						<div className="direction-container">
// 							<button className="direction-btn">
// 								<FaArrowLeftLong />
// 								<span className="direction-btn-text">PREVIOUS</span>
// 							</button>
// 							<span>1/2</span>
// 							<button className="direction-btn">
// 								<span className="direction-btn-text">NEXT</span>
// 								<FaArrowRightLong />
// 							</button>
// 						</div>
// 					</div>

// 					<div className="box_container">
// 						{/* {['Food', 'Occupations', 'Places'].map((category, index) => ( */}
// 						<div className="box"  >
// 							<div className="box_sub">
// 								<div className="box_circle">
// 									<FaAppleAlt size={20} color='blue' />
// 								</div>
// 								<p>Food</p>
// 								<p>1/5</p>
// 								<Progress now={40} />
// 							</div>
// 							<div className="box_title_container">
// 								<div className="box_title_main">
// 									<h6 className="box_title1">PLACE</h6>
// 									<h6 className="box_title1">YOUR BID</h6>
// 									<h6 className="box_title1">REQUEST</h6>
// 								</div>
// 								<div className="box_title_color1"></div>
// 							</div>
// 						</div>
// 						<div className="box"  >
// 							<div className="box_sub">
// 								<div className="box_circle">
// 									<FaBriefcase size={20} color='red' />
// 								</div>
// 								<p>Food</p>
// 								<p>1/5</p>
// 								<Progress now={60} />
// 							</div>
// 							<div className="box_title_container">
// 								<div className="box_title_main">
// 									<h6 className="box_title2">PLACE</h6>
// 									<h6 className="box_title2">YOUR BID</h6>
// 									<h6 className="box_title2">REQUEST</h6>
// 								</div>
// 								<div className="box_title_color2"></div>
// 							</div>
// 						</div>
// 						<div className="box"  >
// 							<div className="box_sub">
// 								<div className="box_circle">
// 									<IoLocationOutline size={20} color='green' />
// 								</div>
// 								<p>Food</p>
// 								<p>1/5</p>
// 								<Progress now={70} color={"green"} />
// 							</div>
// 							<div className="box_title_container">
// 								<div className="box_title_main">
// 									<h6 className="box_title3">PLACE</h6>
// 									<h6 className="box_title3">YOUR BID</h6>
// 									<h6 className="box_title3">REQUEST</h6>
// 								</div>
// 								<div className="box_title_color3"></div>
// 							</div>
// 						</div>
// 						{/* ))} */}
// 					</div>
// 					<div className="box_images">
// 						<img src={G4S} alt="G4S" className="image-style" />
// 						<img src={dulux} alt="dulux" className="image-style" />
// 						<img src={broll} alt="broll" className="image-style" />
// 						<img src={cdk} alt="cdk" className="image-style" />
// 						<img src={karcher} alt="karcher" className="image-style" />
// 						<img src={berger} alt="Berger" className="image-style" />
// 					</div>
// 				</div>
// 			</main>
// 		</div>
// 	);
// }
// export default Home





const Home = () => {



	return (
		<div>
			<Navbar />
			<div>

				{/* Landing Page */}
				<GetYours />
				<LatestNews />
				<ExclusiveBenefits />
				<FAQ />
				{/* Footer */}
				<Footer />
			</div>
		</div>
	)
}

export default Home