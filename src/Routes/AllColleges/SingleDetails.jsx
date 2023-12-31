import React from "react";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

const SingleDetails = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);
  const {
    college_name,
    college_image,
    admission_date,
    research_history,
    rating,
    sports,
    admission_process,
    _id,
  } = loaderData;
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${college_image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="lg:flex justify-center items-center  text-neutral-content">
        <div>
          <img src={college_image} className="h-[500px] mr-10" />
        </div>
        <div className="max-w-md px-5">
          <h1 className="mb-5 text-5xl font-bold">{college_name}</h1>
          <p className="mb-5">Admission Date :{admission_date}</p>
          <p className="mb-5">Admission Process :{admission_process}</p>
          <p className="mb-5">Research History :{research_history}</p>
          <p className="mb-5 text-base">
            Sports :
            {sports.map((singleSports) => {
              return (
                <ul className=" pl-10 list-disc">
                  <li>{singleSports}</li>
                </ul>
              );
            })}
          </p>
          <p className="mb-5">
            <Rating initialRating={rating} readonly />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleDetails;
