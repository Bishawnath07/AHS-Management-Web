import  { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const SingleAdmission = () => {
  const data = useLoaderData();
//   console.log(data);
  const { user } = useContext(AuthContext);

  const handleAddToy = (e) => {
    e.preventDefault();

    const form = e.target;
    const CollegeName = form.name.value;
    const candidateName = form.CandidateName.value;
    const email = form.CandidateEmail.value;
    const subject = form.subject.value;
    const photo = form.photo.value;
    const address = form.address.value;
    const dateOfBirth = form.dateOfBirth.value
    const phoneNumber = form.number.value


    const applyDetails = {
        CollegeName,
        candidateName,
        email,
        subject,
        photo,
        address,
        dateOfBirth,
        phoneNumber
    }

    console.log(applyDetails)

    const url = "https://e-commerce-site-back-end.vercel.app/admissionApply";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(applyDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Applied Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });


  };

  return (
    <div className="bg-image2 py-2">
      <h1 className="text-center font-bold text-4xl py-10">Admission</h1>
      <div className="px-24">
        <form onSubmit={handleAddToy}>
          <div className="lg:flex mb-8">
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">College Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="College Name"
                  defaultValue={data.college_name}
                  readOnly
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control lg:w-1/2  lg:ml-4">
              <label className="label">
                <span className="label-text">Date of Birth</span>
              </label>
              <label className="input-group">
                <input
                  type="date"
                  name="dateOfBirth"
                  placeholder="Candidate Name"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>

          <div className="lg:flex mb-8">
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">Candidate Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="CandidateName"
                  placeholder="Candidate Name"
                  defaultValue={user?.displayName}
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control lg:w-1/2 lg:ml-4">
              <label className="label">
                <span className="label-text">Candidate Email</span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  name="CandidateEmail"
                  placeholder="Candidate Email"
                  defaultValue={user?.email}
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>

          <div className="lg:flex mb-8">
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <select name="subject" className="input input-bordered w-full">
                required
                <option value="">Select an option</option>
                <option>EEE</option>
                <option>CSE</option>
                <option>LAW</option>
              </select>
            </div>
            <div className="form-control lg:w-1/2 lg:ml-4">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="url"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          <div className="lg:flex mb-8">
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>

              <input
                type="number"
                name="number"
                placeholder="+880"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control lg:w-1/2 lg:ml-4">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="address"
                  placeholder="City, Post code and Number of Road or house"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Apply Now"
            className=" border bg-image border-[#f36b3b] rounded-lg px-8 py-2 text-white duration-300  w-full   text-center cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default SingleAdmission;
