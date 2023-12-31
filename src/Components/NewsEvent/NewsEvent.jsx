import { useEffect, useState } from "react";

const NewsEvent = () => {
  const [news, setNews] = useState([]);
  console.log(news)
  useEffect(() => {
    const load = async () => {
      const res = await fetch("https://e-commerce-site-back-end.vercel.app/research");
      const data = await res.json();
      setNews(data);
    };
    load();
  }, []);
  return (
    <>
      <h1 className="text-center font-bold text-4xl mt-10">News & Event</h1>
      <div className="grid grid-cols-1 mt-10 mx-16">
        {news.map((n) => {
          const { title, author, publication_date, image_url, abstract, _id } =
            n;
          return (
            <div key={_id}>
              <div
                key={_id}
                className="lg:flex items-center bg-base-100  p-4 shadow-xl"
              >
                <figure>
                  <img src={image_url} alt="Movie" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{title}</h2>
                  <p>Name : {author}</p>
                  <p>Published : {publication_date}</p>
                  <p>{abstract}</p>
                </div>
              </div>
              <hr className="border-2" />
            </div>

          );
        })}
      </div>
    </>
  );
};

export default NewsEvent;
