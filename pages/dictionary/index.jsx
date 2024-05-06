import Link from "next/link";
import React, { useState } from "react";
import News_item from "../../components/blog/news_item";
import { single_news_data } from "../../data/news_data";
import Meta from "../../components/Meta";
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Blog() {
  const [loadMoreBtn, setLoadMoreBtn] = useState(true);
  const [data, setdata] = useState(single_news_data.slice(0, 6));//window.location.href.includes("query=") ? news_data.filter(isInclude) : 
  const [query, setQuery] = useState("");

  const router = useRouter();

  useEffect(() => {
    const searchParams = new URLSearchParams(router.asPath.split('?')[1]);
    var queryPar = searchParams.get('query')
    if(queryPar){
       setQuery(queryPar);
       var dt =single_news_data.filter((val) => {
        //var par = query
        //var searchVal = window.location.href.split("query=")[1]
        return val.title.toLowerCase().includes(queryPar.toLowerCase()) || val.description.toLowerCase().includes(queryPar.toLowerCase())  || val.descriptionAda.toLowerCase().includes(queryPar.toLowerCase())
      })
      setdata(dt)
    }
  }, [router.asPath]);


  const handleLoadMore = () => {
    setdata(single_news_data);
    setLoadMoreBtn(false);
  };

  return (
    <>
      <Meta title="Terms" />
      {/* <!-- Blog --> */}
      <section className="relative  pt-[5.5rem] lg:pt-24">
        <div className="py-16 ">
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img
              src="/images/gradient_light.jpg"
              alt="gradient"
              className="h-full w-full"
            />
          </picture>

          <div className="container">
          <h2 style={{display: query ? "block" : "none"}} className="mb-10 font-display text-5xl text-jacarta-700 dark:text-white text-center lg:text-6xl xl:text-5xl">
            <span className="animate-gradient">Results</span>
            </h2>
            {/* <!-- Featured Post --> */}
            <article className="mb-[1.875rem] md:mb-16" style={{display: query ? "none" : "block"}}>
              <div className="rounded-2xl flex flex-col overflow-hidden transition-shadow hover:shadow-lg md:flex-row">
                <figure className="group overflow-hidden md:w-1/2">
                  <Link href="#">
                    <a>
                      <img
                        src="/images/blog/item_4.jpeg"
                        alt="post 1"
                        className="h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                      />
                    </a>
                  </Link>
                </figure>

                {/* <!-- Body --> */}
                <div className="dark:border-jacarta-600 dark:bg-jacarta-700 border-jacarta-100 rounded-b-[1.25rem] border bg-white p-[10%] md:w-1/2 md:rounded-none md:rounded-r-[1.25rem]">
                  {/* <!-- Meta --> */}
                  <div className="mb-3 flex flex-wrap items-center space-x-1 text-xs">
                    <Link href="#">
                      <a className="dark:text-jacarta-200 text-jacarta-700 font-display hover:text-accent">
                      Author
                      </a>
                    </Link>
                    <span className="dark:text-jacarta-400"></span>
                    <span className="text-accent inline-flex flex-wrap items-center space-x-1">
                      <a href="#">Eth2Ada Academy</a>
                    </span>
                  </div>

                  <h2 className="font-display text-jacarta-700 dark:hover:text-accent hover:text-accent mb-4 text-xl dark:text-white sm:text-3xl">
                    <Link href="/single_term/term_62">
                      <a> Kuber IDE </a>
                    </Link>
                  </h2>
                  <p className="dark:text-jacarta-200 mb-8" style={{textTransform: 'none'}}>
                  Kuber IDE is a browser based IDE for complete Plutus smart contracts development. No setup required. Write Plutus contracts, compile them and create transactions, all within the browser.
                                    </p>

                  {/* <!-- Date / Time --> */}
                  <div className="text-jacarta-400 flex flex-wrap items-center space-x-2 text-sm">
                    <span>
                      {/* <time>5 Feb</time> */}
                    </span>
                    {/* <span>•</span> */}
                   <span>3 min read</span>
                  </div>
                </div>
              </div>
            </article>

          { data.length > 0 ?  
           <News_item data={data} />  : 
          <span> No Data</span>
          }

            {/* <!-- Load More --> */}
            {loadMoreBtn && (
              <div className="mt-10 text-center"  style={{display: query ? "none" : "block"}}>
                <button
                  onClick={handleLoadMore}
                  className="bg-accent shadow-accent-volume hover:bg-accent-dark inline-block rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* <!-- end blog --> */}
    </>
  );
};

