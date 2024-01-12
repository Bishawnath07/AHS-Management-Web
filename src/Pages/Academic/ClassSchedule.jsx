import Divider from "../../Components/Divider/Divider";


const ClassSchedule = () => {
    return (
        <div className='md:my-10 max-w-7xl mx-auto my-2'>
            <h1 className='text-[15px] md:text-[24px] font-semibold grid place-items-center md:my-5 '>Home  ~ Class Schedule</h1>
            <Divider ></Divider>
            <div className="flex justify-center mt-5">
                <div className="w-8/12">
                    <div className="p-4 bg-gray-200">
                        <p className="text-lg font-bold mb-4">Daily Activities</p>
                        <p>
                            Gate Opening: 9.00 A.M. (Regulars)<br />
                            Assembly: 9.15 A.M. (Saturday, Monday, Thursday)<br />
                            Class Starting: 10.00 A.M. (Regular)<br />
                            Class Closing:<br />
                            • Class- 6 to 10: 1.05 P.M. (Saturday)<br />
                            • Class- 6 to 10: 1.05 P.M. (Sunday)<br />
                            • Class- 6 to 10: 1.05 P.M. (Monday)<br />
                            • Class- 6 to 10: 1.05 P.M. ( Tuesday)<br />
                            • Class- 6 to 10: 1.05 P.M. ( Wednesday)<br />
                            • Class- 6 to 10: 11.15 A.M. (Thursday)<br />

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassSchedule;