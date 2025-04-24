import Link from "next/link";
import React from "react";

const News_item = ({ data }) => {
  return (
    <div className="row mb-8">
      {data.map((item) => {
        const { id, title, text, image, date, time } = item;
        return (
          <div key={id} className="col-md-6">
            <article className="mb-8">
              <div className="news-box rounded-2xl flex flex-col overflow-hidden transition-shadow hover:shadow-lg md:flex-row">
                <figure className="group overflow-hidden md:w-1/2">
                  <Link href={`/single_term/${id}`}>
                    <a>
                      <img
                        src={image}
                        alt="news"
                        className="h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                      />
                    </a>
                  </Link>
                </figure>

                <div className="dark:border-jacarta-600 dark:bg-jacarta-700 border-jacarta-100 rounded-b-[1.25rem] border bg-white p-[10%] md:w-1/2 md:rounded-none md:rounded-r-[1.25rem]">
                  <div className="mb-3 flex flex-wrap items-center space-x-1 text-xs">
                    <span className="text-accent inline-flex flex-wrap items-center space-x-1">
                      <a href="#">Eth2Ada Academy</a>
                    </span>
                    <span className="dark:text-jacarta-400"></span>
                  </div>

                  <h2 className="font-display text-jacarta-700 dark:hover:text-accent hover:text-accent mb-4 text-xl dark:text-white sm:text-3xl">
                    <Link href={`/single_term/${id}`}>
                      <a>{title}</a>
                    </Link>
                  </h2>
                  <p className="dark:text-jacarta-200 mb-8" style={{ textTransform: "none" }}>
                    {text}
                  </p>

                  <div className="flex flex-wrap items-center space-x-2 text-sm">
                    <span className="text-jacarta-400">{date}</span>
                    <span className="dark:text-jacarta-400"></span>
                    <span className="text-jacarta-400">{time}</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default News_item;
