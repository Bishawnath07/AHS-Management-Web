import Divider from "../../Components/Divider/Divider";


const Admission = () => {

  return (
    <div className="max-w-7xl mx-auto md:mt-10 mt-10">
      <h1 className='text-[24px] font-semibold grid place-items-center my-5 '>Home  ~ Admission</h1>
      <Divider ></Divider>
      <div className="mt-10  md:mx-0">
        <h2 className="text-[16px] md:text-[24px] font-bold grid place-items-center ">Why Study ?</h2>
        <div className=" mx-5 md:mx-36 mt-8">
          <ul className="list-disc pl-4">
            <li>Activities of Session start and finish in due time.</li>
            <li>Students are taught by experienced & skillful teachers.</li>
            <li>Safe and enlarged campus.</li>
            <li>Clean, decorated, and advanced classrooms.</li>
            <li>Support of Sylhet gives us a full-time security.</li>
            <li>Advanced Science and computer lab.</li>
            <li>A huge Library with ample books.</li>
            <li>Entirely smoke-free and Politics-free environment.</li>
            <li>In every session, a calendar is disclosed.</li>
            <li>Ensuring students’ presence with the help of related teachers.</li>
            <li>
              Ensuring students’ 100% pass with GPA: 5 in the public exams and GPA:
              5 holders are given a warm reception and crest.
            </li>
            <li>Ensuring students’ participation in scout/girls Guide and Rover scout.</li>
            <li>
              After ten days of all semester progress report of the students are sent
              to the respective guardians for conversance. Progress report of first
              & second semesters are only taken back from the students. Besides,
              Answer scripts of the Annual examination are shown to the guardians
              with the permission of the Humble Principal (If Applicable).
            </li>
            <li>
              There is an arrangement of guardian’s Meeting for open discussion about
              study & Progress of the students.
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Admission;
