
import { useNavigate } from "react-router-dom";
import ActionButton from "./ActionButton";

const Navbar = () => {
	document.title = "Trebnet | Home";
	const navigate = useNavigate();


	return (
		<nav id="navbar">
			<div id="logo">
				Trebnet
			</div>
			<div >
				<ul className="nav_menu">
					<li>
						PROJECTS
					</li>
					<li>
						DIRECTORY
					</li>
					<li>
						TRANSACTIONS
					</li>
					<li>
						MEDIA
					</li>
				</ul>
			</div>
			<div >
				<div >
					<ActionButton text={"Login"} btn_prop={"btn_prop"} navigate={navigate} />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;