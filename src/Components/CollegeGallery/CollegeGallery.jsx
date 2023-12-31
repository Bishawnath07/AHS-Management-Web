import { useEffect, useState } from "react";
import Divider from "../Divider/Divider";

const CollegeGallery = () => {
  const [college, setCollege] = useState([]);
  useEffect(() => {
    // fetch("https://e-commerce-site-back-end.vercel.app/allCollege")
    fetch("gallery.json")
      .then((res) => res.json())
      .then((data) => setCollege(data));
  }, []);

  return (
    <div>
      <h1 className='text-[24px] font-semibold grid place-items-center my-5 '>Home  ~   Gallery</h1>
      <Divider ></Divider>
      <h1 className="text-center my-10 font-bold text-4xl"> Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 bg-gray-100 py-8 mx-auto px-4 lg:grid-cols-4 gap-4">
        {college.slice(0, 8).map((col) => {
          const { teacher_img, teacher_name, _id } = col;

          return (
            <div key={_id} className="relative overflow-hidden rounded college-card">
              <img src={teacher_img} className="w-full h-[200px]" alt={teacher_name} />
              <p className="text-[18px] font-bold ">{teacher_name}</p>
              <div className="college-name">
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollegeGallery;
