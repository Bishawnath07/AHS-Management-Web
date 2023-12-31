import { useEffect } from 'react';
import { useState } from 'react';
import './Cart.css'

const Carts = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('datas.json');
                const result = await response.json();
                setData(result);
                console.log(result)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            {data.map((item, index) => (
                <div key={index} className="card bg-slate-200 shadow-xl mb-5">
                    <figure className="px-10 pt-10">
                        <img src={item.img} alt="Shoes" className="rounded-md" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{item.name} </h2>
                        <p className='bg-[#609513] title'>{item.title}</p>
                        <div className="card-actions">
                            <button className="px-3 py-2 rounded-sm btn-primary">Details</button>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    );
};


export default Carts;