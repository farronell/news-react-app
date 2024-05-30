import React, { useState } from "react";
import { LoaderCircle } from "lucide-react";

export default function Card({ news, loading, error }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  if (loading) {
    return (
      <section>
        <LoaderCircle className="animate-spin" />
        <h2>Loading...</h2>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <h2>{error.massage}</h2>
      </section>
    );
  }

  return (
    <article className="border-4 rounded-3xl border-red-600 w-[450px] p-3 flex flex-col items-end justify-around gap-1" >
      <img
        src={news.urlToImage}
        alt={news.title}
        className="rounded-3xl w-full"
      />
      <h2 className="text-3xl font-semibold">{news.title}</h2>
      <h3 className="text-2xl font-serif">{news.author}</h3>
      <span className="font-mono">Published: {news.publishedAt}</span>
      <button
        onClick={handleOpen}
        className="w-[100px] border border-red-600 text-white bg-red-600 hover:bg-red-500 hover:text-white duration-300"
      >
        {!isOpen ? "Read description" : "Hide description"}
      </button>
      {isOpen ? (
        <>
          <p className="text-lg font-medium">{news.description}</p> <span className="w-[100px] border border-red-600 text-red-600 bg-white hover:bg-red-500 hover:text-white duration-300 text-center"><a href={news.url} target="_blank" rel="noreferrer"> Read more</a></span> 
        </>
      ) : (
        ""
      )}
    </article>
  );
}
