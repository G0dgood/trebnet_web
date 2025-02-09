import { useRef, useState } from "react";
import { ReactComponent as Avatar } from "../assets/svg/Avatar.svg"
import { ReactComponent as BlogPic1 } from "../assets/svg/BlogPic1.svg"
import { ReactComponent as BlogPic2 } from "../assets/svg/BlogPic2.svg"
import { ReactComponent as BlogPic3 } from "../assets/svg/BlogPic3.svg"


type Blog = {
	image: JSX.Element;
	title: string;
	author: string;
	date: string;
	readTime: string;
};


const blogData: Blog[] = [
	{ image: <BlogPic1 />, title: "PLACE", author: "YOUR BID REQUEST", date: "Oct 19, 2021", readTime: "5min read" },
	{ image: <BlogPic2 />, title: "PLACE", author: "YOUR BID REQUEST", date: "Oct 19, 2021", readTime: "5min read" },
	{ image: <BlogPic3 />, title: "PLACE", author: "YOUR BID REQUEST", date: "Oct 19, 2021", readTime: "5min read" },
	{ image: <BlogPic1 />, title: "PLACE", author: "YOUR BID REQUEST", date: "Oct 19, 2021", readTime: "5min read" },
	{ image: <BlogPic2 />, title: "PLACE", author: "YOUR BID REQUEST", date: "Oct 19, 2021", readTime: "5min read" },
	{ image: <BlogPic3 />, title: "PLACE", author: "YOUR BID REQUEST", date: "Oct 19, 2021", readTime: "5min read" },
	{ image: <BlogPic1 />, title: "PLACE", author: "YOUR BID REQUEST", date: "Oct 19, 2021", readTime: "5min read" },
	{ image: <BlogPic2 />, title: "PLACE", author: "YOUR BID REQUEST", date: "Oct 19, 2021", readTime: "5min read" }
];

const LatestNews = () => {

	const marqueeRef = useRef<HTMLDivElement | null>(null);
	const [isDragging, setIsDragging] = useState<boolean>(false);
	const [startX, setStartX] = useState<number>(0);
	const [scrollLeft, setScrollLeft] = useState<number>(0);

	const handleMouseDown = (e: { pageX: number; }) => {
		if (!marqueeRef.current) return;
		setIsDragging(true);
		setStartX(e.pageX - marqueeRef.current.offsetLeft);
		setScrollLeft(marqueeRef.current.scrollLeft);
	};

	const handleMouseLeave = () => {
		setIsDragging(false);
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	const handleMouseMove = (e: { preventDefault: () => void; pageX: number; }) => {
		if (!isDragging || !marqueeRef.current) return;
		e.preventDefault();
		const x = e.pageX - marqueeRef.current.offsetLeft;
		const walk = (x - startX) * 2; // Adjust scrolling speed
		marqueeRef.current.scrollLeft = scrollLeft - walk;
	};

	return (
		<section className='section_seven'>
			<div
				className='marquee'
				ref={marqueeRef}
				onMouseDown={handleMouseDown}
				onMouseLeave={handleMouseLeave}
				onMouseUp={handleMouseUp}
				onMouseMove={handleMouseMove}
			>
				<div className='marquee_content'>
					{[...blogData, ...blogData].map((blog, index) => (
						<div className='blog_card' key={index}>
							<div className='blog_card_inside'>
								{blog.image}
							</div>
							<div className='blog_card_text_container'>
								<div>
									<h3 className='blog_card_text'>{blog.title}</h3>
								</div>
								<div className='blog_Avatar_container'>
									<Avatar />
									<div>
										<h6>{blog.author}</h6>
										<p>{blog.date} • {blog.readTime}</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default LatestNews;


