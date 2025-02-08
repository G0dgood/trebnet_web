import Navbar from "../../components/Navbar"
import ExclusiveBenefits from '../ExclusiveBenefits';
import FAQ from "../FAQ"
import Footer from "../Footer"
import GetYours from "../GetYours"
import LatestNews from "../LatestNews"


const Home = () => {


	return (
		<div>
			<Navbar />
			{/* Landing Page */}
			<GetYours />
			<LatestNews />
			<ExclusiveBenefits />
			<FAQ />
			{/* Footer */}
			<Footer />
		</div>
	)
}

export default Home