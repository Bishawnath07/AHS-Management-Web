import { useEffect, useState } from "react";

const CollegeGallery = () => {
  const [college, setCollege] = useState([]);
  useEffect(() => {
    // fetch("https://e-commerce-site-back-end.vercel.app/allCollege")
    fetch("https://e-commerce-site-back-end.vercel.app/allCollege")
      .then((res) => res.json())
      .then((data) => setCollege(data));
  }, []);

  return (
    <div>
      <h1 className="text-center my-10 font-bold text-4xl">College Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 bg-gray-100 py-8 mx-auto px-4 lg:grid-cols-4 gap-4">
        {college.slice(0, 8).map((col) => {
          const { college_image, college_name, _id } = col;

          return (
            <div key={_id} className="relative overflow-hidden rounded college-card">
              <img src={college_image} className="w-full h-[200px]" alt={college_name} />
              <div className="college-name">
                <p>{college_name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollegeGallery;
