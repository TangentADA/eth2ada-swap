/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';
import { single_news_data } from "../../data/news_data";
import Statistic_promo_carousel from '../carousel/statistic_promo_2_carousel';

function getDailyNumber() {
	const currentDate = new Date();
	const dayOfYear = Math.floor(
	  (currentDate - new Date(currentDate.getFullYear(), 0, 0)) / 86400000
	); // Calculate day of the year (0-365)
  
	// Calculate the daily number based on the day of the year
	const dailyNumber = (dayOfYear % 60) + 1;
  
	return dailyNumber;
  }

const Statistic_promo_2 = () => {
	  
	const dailyNumber = getDailyNumber();
	var term = single_news_data[dailyNumber]
	return (
		<div id='termofday' className='pt-20 lg:pt-20 xs:pt-5 sm:pt-5'>
			{/* <!-- Promo 2 --> */}
			<section  className="statistic_promo_2-section py-12 lg:pb-24 overflow-x-hidden overflow-y-hidden">
				<div className="container">
					<div className="items-center justify-between lg:flex">
						<div className="mb-12 lg:w-[45%] lg:pr-16">
							<h2 className="mb-6 font-display text-2xl text-white">
							TERM OF THE DAY
							</h2>
							<h2 className="mb-2 font-display text-5xl text-jacarta-700 dark:text-white lg:text-6xl xl:text-5xl">
            <span className="animate-gradient">{term.title}</span>
            </h2>
							<p className="mb-8 text-lg leading-normal text-jacarta-200" style={{textTransform: 'none', textOverflow: 'ellipsis', overflow: 'hidden', '-webkit-line-clamp': '8', '-webkit-box-orient': 'vertical', display: '-webkit-box'}}>
							{term.description == "---" ? term.descriptionETH : term.description}
</p>
							<p className="mb-12 text-jacarta-200">
								{/* Every digital creation available through MakersPlace is an authentic and truly
								unique digital creation, signed and issued by the creator — made possible by
								blockchain technology. Even if the digital creation is copied, it won't be the
								authentic and originally signed version. */}
							</p>
							<Link   href={`/single_term/${term.id}`}>
							{/* href="/collection/explore_collection"> */}
								<a className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">
									View More
								</a>
							</Link>
						</div>
						<div className="relative text-center lg:w-1/2">
							<img
								src="/images/nft-game/gradient_glow_large_2.png"
								loading="lazy"
								alt=""
								className="pointer-events-none absolute scale-150"
							/>

							{/* <!-- Slider --> */}
							<Statistic_promo_carousel />

							<img
								src="/images/nft-game/crypto_icons_1.png"
								alt=""
								loading="lazy"
								className="pointer-events-none absolute -top-10 z-10 animate-fly"
							/>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- end promo 2 --> */}
		</div>
	);
};

export default Statistic_promo_2;
