import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CollegeCard = () => {
  const [allColleges, setAllColleges] = useState([]);
  useEffect(() => {
    const load = async () => {
      const res = await fetch("https://e-commerce-site-back-end.vercel.app/allCollege");
      const data = await res.json();
      setAllColleges(data);
    };
    load();
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-10 mt-10">
        {allColleges.slice(0, 6).map((singleCollege) => {
          return (
            <div
              key={singleCollege._id}
              className="card card-compact my-3 transition-all duration-300 ease-in hover:scale-105 bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  src={singleCollege.college_image}
                  className="h-[350px]"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{singleCollege.college_name}</h2>
                <p>Admission Dates : {singleCollege.admission_date}</p>
                <p>Research History : {singleCollege.research_history}</p>
                <div>
                  <p>Sports:</p>
                  {singleCollege.sports.map((singleSports) => {
                    return (
                      <ul key={singleSports._id} className="pl-10 list-disc">
                        <li>{singleSports}</li>
                      </ul>
                    );
                  })}
                </div>
                <div className="card-actions justify-end">
                  <Link to={`/college/${singleCollege._id}`}>
                  <button className="btn bg-image text-black">Details</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center mt-7">
        <Link to="/allColleges">
          <button className="border px-8 py-3 rounded transform transition duration-300 ease-linear hover:scale-110 text-black bg-image border-[#f36b3b]">
            See More
          </button>
        </Link>
      </div>
    </>
  );
};

export default CollegeCard;
