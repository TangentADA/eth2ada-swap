import React from 'react';
import Characters_carousel from './carousel/characters_carousel';
import HeadLine from '../components/headLine';

const Characters = () => {
	return (
		<div>
			{/* <!-- Characters Slider --> */}
			<section className="characters-section relative lg:py-36">
				<picture className="pointer-events-none absolute inset-0 -z-10">
					<img src="/images/gradient_creative.jpg" alt="gradient" className="h-full w-full" />
				</picture>
				<div className="container">
				<HeadLine
						image="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/1f4a5.png"
						text="TRENDING TERMS"
						classes="font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white"
					/>
				</div>
				<div className="relative px-6  sm:px-0">
					<Characters_carousel />
				</div>
			</section>
			{/* <!-- end characters slider --> */}
		</div>
	);
};

export default Characters;
