
import { Link } from "react-router-dom";

const SingleColleges = ({ singleCollege }) => {
  const {
    college_name,
    college_image,
    admission_date,
    research_history,
    rating,
   
    _id,
  } = singleCollege;
  return (
    <div className="card card-compact my-3 transition-all duration-300 ease-in hover:scale-105 bg-base-100 shadow-xl">
      <figure>
        <img src={college_image} className="h-[350px]" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{college_name}</h2>
        <p>Admission Dates : {admission_date}</p>
        <p>Research History : {research_history}</p>
        <p>Ratings : {rating}</p>
        <div className="card-actions justify-end">
          <Link to={`/college/${_id}`}>
            <button className="btn bg-image text-black">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleColleges;
