import Link from "next/link";
import React from "react";

const News_item = ({ data, classes }) => {
  return (
    <div className={classes || "row mb-8"}>
      {data.map((item) => {
        const { id, title, text, date, time } = item;
        return (
          <div key={id}>
            <article className="mb-8">
              <div className="dark:border-jacarta-600 dark:bg-jacarta-700 border-jacarta-100 rounded-2xl border bg-white p-6">
                <div className="mb-3 flex flex-wrap items-center space-x-1 text-xs">
                  <span className="text-accent inline-flex flex-wrap items-center space-x-1">
                    <a href="#">Eth2Ada Academy</a>
                  </span>
                  <span className="dark:text-jacarta-400"></span>
                </div>

                <h2 className="font-display text-jacarta-700 dark:hover:text-accent hover:text-accent mb-4 text-xl dark:text-white sm:text-2xl">
                  <Link href={`/single_term/${id}`}>
                    <a>{title}</a>
                  </Link>
                </h2>
                <p className="dark:text-jacarta-200 mb-4 text-sm" style={{ textTransform: "none" }}>
                  {text}
                </p>

                <div className="flex flex-wrap items-center space-x-2 text-sm">
                  <span className="text-jacarta-400">{date}</span>
                  <span className="dark:text-jacarta-400"></span>
                  <span className="text-jacarta-400">{time}</span>
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
