import { ReactComponent as Copyright } from "../assets/svg/Copyright.svg"
import { ReactComponent as Facebook } from "../assets/svg/Facebook.svg";
import { ReactComponent as X } from "../assets/svg/X.svg";
import { ReactComponent as Instart } from "../assets/svg/Instart.svg";
import { ReactComponent as Linkdin } from "../assets/svg/Linkdin.svg";
import { ReactComponent as LucideIcon } from "../assets/svg/LucideIcon.svg";

const Footer = () => {
	return (
		<section className='footer_container'>
			<div className='footer_container_easily' />
			<div className='footer_container_second'>
				<div className='footer_container_main'>
					<div className='footer_top_container'>
						<h1 className='footer_top_container_h1'>Trebnet</h1>
						<p className='footer_first_two'>Easily set up and oversee your online store. Offer products, and do much more with us.</p>
						<div className='icon_container'>
							<Facebook />
							<X />
							<Instart />
							<Linkdin />
						</div>
					</div>
					<div className='footer_top_container'>
						<p className='footer_top'>Company</p>
						<p className='footer_top_p'>Project</p>
						<p className='footer_top_p'>Dicectory</p>
						<p className='footer_top_p'>Media</p>
						<p className='footer_top_p'>Transactions</p>
						<p className='footer_top_p'>Contact</p>
					</div>
					<div className='footer_top_container'>
						<p className='footer_top'>Contact</p>
						<p className='footer_top_p'>+234 223 238 2324</p>
						<p className='footer_top_p'>+234 557 244 0786</p>
						<p className='footer_top_p'>www.trebnet.net</p>
						<p className='footer_top_p'>Lagos, Nigeria</p>
					</div>
					<div className='footer_top_container'>
						<div className='footer_top'>Get Connected </div>
						<p className='footer_first_two' >Get the latest updates about Trebnet new features and product updates.</p>
						<div className='icon_button_input'>
							<input />
							<button className='icon_button'>
								<LucideIcon />
							</button>
						</div>
					</div>
				</div>
				<div className='footer_copyright'>
					<h4>Trebnet</h4><Copyright /><h4>2023</h4>
				</div>
			</div>
		</section>
	)
}

export default Footer
