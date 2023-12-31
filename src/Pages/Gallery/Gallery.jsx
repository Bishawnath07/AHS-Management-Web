import { useEffect, useState } from "react";

const Gallery = () => {
    const [college, setCollege] = useState([]);
    useEffect(() => {
        // fetch("https://e-commerce-site-back-end.vercel.app/allCollege")
        fetch("gallery.json")
            .then((res) => res.json())
            .then((data) => setCollege(data));
    }, []);

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-center my-10 font-bold text-[18px] md:text-4xl">Campus Gallery</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 bg-gray-100 py-8 mx-auto px-4 lg:grid-cols-4 gap-4">
                {college.slice(0, 8).map((col) => {
                    const { collage_img, collage_name, _id } = col;

                    return (
                        <div key={_id} className="relative overflow-hidden rounded college-card">
                            <img src={collage_img} className="w-full h-[200px]" alt={collage_name} />
                            <div className="college-name">
                                <p>{collage_name}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Gallery;
