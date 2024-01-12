
const Statistics = () => {
    return (
        <div >
            <div className=" text-white bg-[#3e1e7e] mt-5 ">
                <div className="md:py-10 py-5">
                    <h3 className="text-center text-[18px] md:text-3xl font-bold ">Student Statistics</h3>
                    <h3 className="text-center text-[14px] md:text-2xl  ">Class wise Students</h3>
                </div>
                <div className=" md:pt-10 md:pb-10 pb-5 ">

                    <div className="grid grid-cols-2
                     md:grid-cols-3 lg:grid-cols-5 place-items-center gap-5 md:gap-10 ">
                        <div className="col-3 border-[1px] border-solid   border-[#b9d8f1] p-8 w-36  rounded-[100%]  ">
                            <h3 className="text-[12x] md:text-[15px] font-bold text-center mb-2 ">Six</h3>
                            <h3 className="text-[12x] md:text-[25px] font-bold text-center mb-5">80 +</h3>

                        </div>
                        <div className="col-3 border-[1px] border-solid border-[#b9d8f1] p-8 w-36  rounded-[100%] ">
                            <h3 className="text-[12x] md:text-[15px] font-bold text-center mb-2 "> Seven</h3>
                            <h3 className="text-[12x] md:text-[25px] font-bold text-center mb-5"> 75 +</h3>

                        </div>
                        <div className="col-3 border-[1px] border-solid border-[#b9d8f1] p-8 w-36  rounded-[100%]">
                            <h3 className="text-[12x] md:text-[15px] font-bold text-center mb-2 ">Eight</h3>
                            <h3 className="text-[12x] md:text-[25px] font-bold text-center mb-5  rounded-md">70 +</h3>
                        </div>
                        <div className="col-3 border-[1px] border-solid border-[#b9d8f1] p-8 w-36  rounded-[100%] ">
                            <h3 className="text-[12x] md:text-[15px] font-bold text-center mb-2 ">Nine</h3>
                            <h3 className="text-[12x] md:text-[25px] font-bold text-center mb-5  rounded-md">60 +</h3>
                        </div>
                        <div className="col-3 border-[1px] border-solid border-[#b9d8f1] p-8 w-36  rounded-[100%] ">
                            <h3 className="text-[12x] md:text-[15px] font-bold text-center mb-2 ">Ten</h3>
                            <h3 className="text-[12x] md:text-[25px] font-bold text-center mb-5  rounded-md">80 +</h3>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Statistics;
