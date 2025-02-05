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
				<img src={G4S} alt="G4S" className="image-style" />
				<img src={dulux} alt="dulux" className="image-style" />
				<img src={broll} alt="broll" className="image-style" />
				<img src={cdk} alt="cdk" className="image-style" />
				<img src={karcher} alt="karcher" className="image-style" />
				<img src={berger} alt="Berger" className="image-style" />
			</div>
		</main>
	)
}

export default ExclusiveBenefits
