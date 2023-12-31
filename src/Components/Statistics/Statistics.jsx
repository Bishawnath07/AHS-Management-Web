
const Statistics = () => {
    return (
        <div >
            <div className=" text-white bg-[#3e1e7e] mt-5 ">
                <div className="py-10">
                    <h3 className="text-center text-3xl font-bold ">Student Statistics</h3>
                    <h3 className="text-center text-2xl  ">Class wise Students</h3>
                </div>
                <div className=" pt-10 pb-10 m">

                    <div className="md:flex justify-between items-center md:gap-10 mx-16">
                        <div className="col-3 border-[1px] border-solid border-[#b9d8f1] p-8 w-36  rounded-[100%]  ">
                            <h3 className="text-[12x] md:text-[15px] font-bold text-center mb-2 ">Teachers</h3>
                            <h3 className="text-[12x] md:text-[25px] font-bold text-center mb-5">20</h3>

                        </div>
                        <div className="col-3 border-[1px] border-solid border-[#b9d8f1] p-8 w-36  rounded-[100%] ">
                            <h3 className="text-[12x] md:text-[15px] font-bold text-center mb-2 "> Graduates</h3>
                            <h3 className="text-[12x] md:text-[25px] font-bold text-center mb-5"> 1254</h3>

                        </div>
                        <div className="col-3 border-[1px] border-solid border-[#b9d8f1] p-8 w-36  rounded-[100%]">
                            <h3 className="text-[12x] md:text-[15px] font-bold text-center mb-2 ">Class</h3>
                            <h3 className="text-[12x] md:text-[25px] font-bold text-center mb-5  rounded-md">7</h3>
                        </div>
                        <div className="col-3 border-[1px] border-solid border-[#b9d8f1] p-8 w-36  rounded-[100%] ">
                            <h3 className="text-[12x] md:text-[15px] font-bold text-center mb-2 ">Stuents</h3>
                            <h3 className="text-[12x] md:text-[25px] font-bold text-center mb-5  rounded-md">500</h3>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Statistics;
