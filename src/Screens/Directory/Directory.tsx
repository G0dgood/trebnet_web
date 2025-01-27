import React, { useState } from 'react'
import Header from '../../components/Header'
import Bottom from '../../components/Bottom'
import CarouselSlide from '../../components/CarouselSlide'
import Entry from './Entry'
import EntryOne from './EntryOne'


const Directory = () => {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<div id="page-wrapper">
			<Header />
			<Bottom />
			<main>
				<div className='directory_container'>
					<div className='carousel_slide_container'>
						<div className='carousel_slide_container_gb_one' />
						<div className='carousel_slide_container_gb_too' />
						<div className='carousel_slide_container_sub'>
							<CarouselSlide />
						</div>
					</div >
					<div className='directory_tab_container'>
						{["PROJECT INFO", "FACILITATOR", "CONSULTANTS", "CONTRACTORS", "SUPPLIERS", "LOCATION"].map((tab, i) => (
							<span
								key={i}
								className={`directory_tab ${activeTab === i ? "directory_tab_active" : ""}`}
								onClick={() => setActiveTab(i)}
							>
								{tab}
							</span>
						))}
					</div>
					{activeTab === 0 && <Entry />}
					{activeTab === 1 && <Entry />}
					{activeTab === 2 && <Entry />}
					{activeTab === 3 && <EntryOne />}
					{activeTab === 4 && <Entry />}
					{activeTab === 5 && <Entry />}
				</div>
			</main>
		</div>
	)
}

export default Directory