import { useEffect, useState } from "react";

const Gallery = () => {
    const [college, setCollege] = useState([]);
    useEffect(() => {
        fetch("teacher.json")
            .then((res) => res.json())
            .then((data) => setCollege(data));
    }, []);

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-center my-10 font-bold text-[18px] md:text-4xl">Our Teachers</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 bg-gray-100 py-8 mx-auto px-4 lg:grid-cols-4 gap-8">
                {college.map((col) => {
                    const { Teacher_img, Teacher_name, _id } = col;

                    return (
                        <div key={_id} className="relative overflow-hidden rounded college-card">
                            <img src={Teacher_img} className="w-full h-[250px]" alt={Teacher_name} />
                            <div className="college-name">
                                <p>{Teacher_name}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Gallery;
