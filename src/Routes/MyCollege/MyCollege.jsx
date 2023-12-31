import  { useContext, useEffect, useState } from "react";
import Modal from "./Modal";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const MyCollege = () => {
  const [applied, setApplied] = useState([]);
  const {user} = useContext(AuthContext)
  
  useEffect(() => {
    const load = async () => {
      const res = await fetch("https://e-commerce-site-back-end.vercel.app/admissionApply");
      const data = await res.json();
      setApplied(data);
    };
    load();
  }, []);

  const url = `https://e-commerce-site-back-end.vercel.app/admissionApply?email=${
    user?.email
  }`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setApplied(data);
      });
  }, [url]);



  
 

  return (
    <>
      <div className="lg:overflow-hidden overflow-x-auto">
        <table className="table w-full mt-5 mx-10">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Serial</th>
              <th>College Name</th>
              <th>Candidate Name</th>
              <th>Subject</th>
              <th>Phone Number</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {applied.map((applied, index) => {
              const {
                CollegeName,
                candidateName,
                email,
                subject,
                photo,
                address,
                dateOfBirth,
                phoneNumber,
                _id,
              } = applied;
              return (
                <>
                 <Modal index={index} _id={_id} key={_id} phoneNumber={phoneNumber} subject={subject} photo={photo} address={address} dateOfBirth={dateOfBirth} CollegeName={CollegeName} candidateName={candidateName} email={email}></Modal>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyCollege;
