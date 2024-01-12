import Divider from "../../Components/Divider/Divider";

const AcademicRules = () => {
    return (
        <div className='md:my-10  my-2 max-w-7xl mx-auto'>
            <h1 className='text-[15px] md:text-[24px] font-semibold grid place-items-center md:my-5 '>Home  ~ Academic Rules</h1>
            <Divider ></Divider>
            <div className="flex items-center justify-center h-[20rem] bg-gray-100">
                <div className="bg-white p-8 rounded shadow-md">
                    <h1 className="text-[22px] md:text-4xl font-bold mb-4">Work in Progress</h1>
                    <p className="text-gray-600 text-[12px]">
                        This page is still a work in progress. We   are working hard to bring you something beautiful.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default AcademicRules;