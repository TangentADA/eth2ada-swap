import Link from 'next/link';
import React from 'react';

const News_item = ({
	data,
	classes = 'grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2 md:grid-cols-3',
}) => {
	return (
		<>
			<div className={classes}>
				{data.map((item) => {
					const { id, image, title, text, date, time, description, descriptionAda } = item;
					const link = image.split('/').slice(3).toString().replace('.jpg', '');
					return (
						<article key={id}>
							<div className="rounded-2xl overflow-hidden transition-shadow hover:shadow-lg">
								<figure className="group overflow-hidden ">
									<Link href={`/single_term/${id}`}>
										<a>
											<img
												src={image}
												alt={title}
												className="h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105 "
											/>
										</a>
									</Link>
								</figure>

								{/* <!-- Body --> */}
								<div className="dark:border-jacarta-600 dark:bg-jacarta-700 border-jacarta-100 rounded-b-[1.25rem] border border-t-0 bg-white p-[10%]">
									{/* <!-- Meta --> */}
									<div className="mb-3 flex flex-wrap items-center space-x-1 text-xs">
										<a
											href="#"
											className="dark:text-jacarta-200 text-jacarta-700 font-display hover:text-accent"
										>
											Author
										</a>
										<span className="dark:text-jacarta-400"></span>
										<span className="text-accent inline-flex flex-wrap items-center space-x-1">
											<a href="#">Eth2Ada Academy</a>
										</span>
									</div>

									<h2 className="font-display text-jacarta-700 dark:hover:text-accent hover:text-accent mb-4 text-xl dark:text-white" style={{
										textOverflow: 'ellipsis',
										whiteSpace: 'nowrap',
										overflow: 'hidden'
									}}>
										<Link href={`/single_term/${id}`}>
											<a> {title} </a>
										</Link>
									</h2>
									<p className="dark:text-jacarta-200 mb-8" style={{
										textOverflow: 'ellipsis',
										// whiteSpace: 'pre-wrap',
										overflow: 'hidden',
										'-webkit-line-clamp': '3',
										'-webkit-box-orient': 'vertical',
										display: '-webkit-box',
										textTransform: 'none'
									}}>  {description != "---" ? description : descriptionAda}</p>

									{/* <!-- Date / Time --> */}
									<div className="text-jacarta-400 flex flex-wrap items-center space-x-2 text-sm">
										{/* <span>
											<time>{date}</time>
										</span>
										<span>•</span> */}
										<span>•</span><span>{time}</span>
									</div>
								</div>
							</div>
						</article>
					);
				})}
			</div>
		</>
	);
};

export default News_item;
