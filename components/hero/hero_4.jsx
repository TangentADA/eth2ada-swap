import Link from "next/link";
import { useEffect, useState } from "react";
import  Redirect  from 'react-router-dom';
import Autocomplete from "../autocomplete";
import { single_news_data } from "../../data/news_data";

export default function Hero_4() {
 
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryString = `?query=${query}`;
    window.location.href = `/dictionary${queryString}`;
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  return (
    <>
      {/* <!-- Hero --> */}
      <section id="top"  className="hero relative pb-15 pt-10 md:pt-10 xs:pt-42">
        <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
          <img src="/images/gradient.jpg" alt="gradient" />
        </picture>
        <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
          <img src="/images/gradient_dark.jpg" alt="gradient dark" />
        </picture>

        <div className="container">
          <div className="mx-auto pt-20 max-w-2xl text-center">
            <h2 className="mb-2 font-display text-5xl text-jacarta-700 dark:text-white lg:text-6xl xl:text-5xl mt-1">
            <span className="animate-gradient">Welcome to the Eth2Ada Hub!</span>
            </h2>
            <p className="mx-auto mb-6 max-w-md text-md leading-normal text-jacarta-50">
            The AI Powered Place To Learn about Cryptocurrency
            </p>
            {/* <!-- Search --> */}
            <div className="App">
      <Autocomplete
        options={single_news_data}
      />
    </div>
            {/* <form onSubmit={handleSubmit} className="relative mb-4">
              <input
               value={query}
                onChange={handleChange}
                type="text"
                
                className="w-full rounded-2xl border border-jacarta-100 py-4 px-4 pl-10 text-md text-jacarta-700 placeholder-jacarta-300 focus:ring-accent dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
                placeholder="Search Dictionary"
              />
              <span className="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="h-4 w-4 fill-jacarta-500 dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
                </svg>
              </span>
            </form> */}
{/* 
            <span className="dark:text-jacarta-300 text-accent">
              Popular searches:
            </span>
            <Link href="#">
              <a className="text-accent hover:text-jacarta-700 dark:hover:text-white">
              Artificial Intelligence,
              </a>
            </Link>
            <Link href="#">
              <a className="text-accent hover:text-jacarta-700 dark:hover:text-white">
              Parser
              </a>
            </Link>
            <Link href="#">
              <a className="text-accent hover:text-jacarta-700 dark:hover:text-white">
                ...
              </a>
            </Link> */}
          </div>
  
        </div>

      </section>
      {/* <!-- end hero --> */}
    </>
  );
};
