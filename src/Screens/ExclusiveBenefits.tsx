import React from 'react'
import berger from '../assets/image/berger.png'
import G4S from '../assets/image/G4S.png'
import karcher from '../assets/image/karcher.png'
import dulux from '../assets/image/dulux.png'
import cdk from '../assets/image/cdk.png'
import broll from '../assets/image/broll.png'


const ExclusiveBenefits = () => {
	return (
		<main>
			<div className="box_images">
				<div className="box_images_items_container">
					<p>G4S</p>
					<img src={G4S} alt="G4S" className="image-style" />
				</div>
				<div className="box_images_items_container">
					<p>Dulux</p>
					<img src={dulux} alt="dulux" className="image-style" />
				</div>
				<div className="box_images_items_container">
					<p>Broll</p>
					<img src={broll} alt="broll" className="image-style" />
				</div>
				<div className="box_images_items_container">
					<p>C D K</p>
					<img src={cdk} alt="cdk" className="image-style" />
				</div>
				<div className="box_images_items_container">
					<p>Karcher</p>
					<img src={karcher} alt="karcher" className="image-style" />
				</div>
				<div className="box_images_items_container">
					<p>Berger</p>
					<img src={berger} alt="Berger" className="image-style" />
				</div>
			</div>
		</main>
	)
}

export default ExclusiveBenefits
