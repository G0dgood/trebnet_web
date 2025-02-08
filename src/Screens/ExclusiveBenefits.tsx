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
					<img src={G4S} alt="G4S" className="image-style" />
					<p>G4S</p>
				</div>
				<div className="box_images_items_container">
					<img src={dulux} alt="dulux" className="image-style" />
					<p>Dulux</p>
				</div>
				<div className="box_images_items_container">
					<img src={broll} alt="broll" className="image-style" />
					<p>Broll</p>
				</div>
				<div className="box_images_items_container">
					<img src={cdk} alt="cdk" className="image-style" />
					<p>C D K</p>
				</div>
				<div className="box_images_items_container">
					<img src={karcher} alt="karcher" className="image-style" />
					<p>Karcher</p>
				</div>
				<div className="box_images_items_container">
					<img src={berger} alt="Berger" className="image-style" />
					<p>Berger</p>
				</div>
			</div>
		</main>
	)
}

export default ExclusiveBenefits
