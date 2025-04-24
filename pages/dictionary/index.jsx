import Link from "next/link";
import React, { useState, useEffect } from "react";
import News_item from "../../components/blog/news_item";
import { single_news_data } from "../../data/news_data";
import Meta from "../../components/Meta";
import { useRouter } from "next/router";
import axios from "axios";

export default function Blog() {
  const [loadMoreBtn, setLoadMoreBtn] = useState(true);
  const [data, setData] = useState(single_news_data.slice(0, 6));
  const [query, setQuery] = useState("");
  const [aiResult, setAiResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [askGrok, setAskGrok] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const searchParams = new URLSearchParams(router.asPath.split("?")[1]);
    const queryPar = searchParams.get("query");
    const askGrokPar = searchParams.get("askGrok") === "true";

    setAskGrok(askGrokPar);

    if (queryPar) {
      setQuery(queryPar);
      const filteredData = single_news_data.filter((val) => {
        return (
          val.title.toLowerCase().includes(queryPar.toLowerCase()) ||
          val.description.toLowerCase().includes(queryPar.toLowerCase()) ||
          val.descriptionETH.toLowerCase().includes(queryPar.toLowerCase())
        );
      });
      setData(filteredData);
    }
  }, [router.asPath]);

  const handleLoadMore = () => {
    setData(single_news_data);
    setLoadMoreBtn(false);
  };

  const handleAskGrok = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        '/api/xai-proxy',
        {
          model: 'grok-beta', // Updated to grok-beta to match old working version
          messages: [
            {
              role: 'system',
              content: 'You are an AI assistant that generates dictionary entries for Cardano-to-Ethereum terms. Provide the response in the following format:\nTitle: [term]\nDescription (Cardano context): [description]\nDescription (Ethereum context): [description]\nText Preview: [short preview up to 100 characters]\nIf the term is specific to Cardano and has no Ethereum equivalent, state that explicitly in the Ethereum context. Ensure all fields are populated with meaningful content.',
            },
            {
              role: 'user',
              content: `Generate a Cardano-to-Ethereum dictionary entry for the term "${query}". Include a title, a description in the context of Cardano, a description in the context of Ethereum, and a short text preview (up to 100 characters) of the Cardano description.`,
            },
          ],
          max_tokens: 500,
        }
      );

      const content = response.data.choices[0].message.content;
      let title = query;
      let description = 'Failed to generate Cardano description.';
      let descriptionETH = 'Failed to generate Ethereum description.';
      let textPreview = '';

      // Parse the structured response
      if (content.includes('Title:')) {
        title = content.split('Title:')[1].split('\n')[0].trim();
      }
      if (content.includes('Description (Cardano context):')) {
        description = content.split('Description (Cardano context):')[1].split('Description (Ethereum context):')[0].trim();
      }
      if (content.includes('Description (Ethereum context):')) {
        descriptionETH = content.split('Description (Ethereum context):')[1].split('Text Preview:')[0].trim();
      }
      if (content.includes('Text Preview:')) {
        textPreview = content.split('Text Preview:')[1].trim();
      } else {
        textPreview = description.slice(0, 100) + (description.length > 100 ? '...' : '');
      }

      const generatedTerm = {
        id: `ai_${query}`,
        title: title,
        text: textPreview,
        description: description,
        descriptionETH: descriptionETH,
        image: '/images/blog/term_6.jpg',
        date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short' }),
        time: '3 min read',
        subImages: [],
        authorImage: '/images/logo-circle.png',
        authorName: 'Grok AI (via Eth2Ada)',
      };
      setAiResult(generatedTerm);
    } catch (error) {
      console.error('Error calling xAI API via proxy:', error.response?.data || error.message);
      setAiResult({ error: 'Failed to generate term. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Meta title="Terms" />
      {/* <!-- Blog --> */}
      <section className="relative pt-[5.5rem] lg:pt-24">
        <div className="py-16">
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img
              src="/images/gradient_light.jpg"
              alt="gradient"
              className="h-full w-full"
            />
          </picture>

          <div className="container">
            <h2
              style={{ display: query ? "block" : "none" }}
              className="mb-10 font-display text-5xl text-jacarta-700 dark:text-white text-center lg:text-6xl xl:text-5xl"
            >
              <span className="animate-gradient">Results for "{query}"</span>
            </h2>
            {/* <!-- Featured Post --> */}
            <article
              className="mb-[1.875rem] md:mb-16"
              style={{ display: query ? "none" : "block" }}
            >
              <div className="rounded-2xl flex flex-col overflow-hidden transition-shadow hover:shadow-lg md:flex-row">
                <figure className="group overflow-hidden md:w-1/2">
                  <Link href="/single_term/term_62">
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
                  <p className="dark:text-jacarta-200 mb-8" style={{ textTransform: "none" }}>
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

                  {/* Removed the "Edit via GitHub" button */}
                </div>
              </div>
            </article>

            {data.length > 0 ? (
              <News_item data={data} />
            ) : (
              <div className="no-data">
                <span>No Data Found</span>
                {(askGrok || aiResult) && (
                  <div className="ask-grok-section">
                    <button
                      onClick={handleAskGrok}
                      disabled={loading}
                      className="ask-grok-btn"
                    >
                      {loading ? "Generating..." : "Ask Grok AI to generate this term"}
                    </button>
                    {aiResult && !aiResult.error && (
                      <div className="term-card ai-generated">
                        <h2>{aiResult.title} (AI-Generated)</h2>
                        <h3 className="animate-gradient">Cardano Definition</h3>
                        <p>{aiResult.description}</p>
                        <h3 className="animate-gradient">Ethereum Definition</h3>
                        <p>{aiResult.descriptionETH}</p>
                        <p>
                          <em>Generated by Grok AI</em>
                        </p>
                        {/* Removed the "Add to Dictionary Request" button */}
                      </div>
                    )}
                    {aiResult && aiResult.error && (
                      <p className="error">{aiResult.error}</p>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* <!-- Load More --> */}
            {loadMoreBtn && (
              <div className="mt-10 text-center" style={{ display: query ? "none" : "block" }}>
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
}
