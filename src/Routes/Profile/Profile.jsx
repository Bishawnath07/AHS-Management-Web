import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { FaPen } from "react-icons/fa";
import Swal from "sweetalert2";
const Profile = () => {
  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(false);
  const { user } = useContext(AuthContext);

  const url = `https://e-commerce-site-back-end.vercel.app/users?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, [url]);

  // console.log(users[0]._id)

  const handleSaveInfo = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const phoneNumber = parseFloat(phone)
    const status = form.status.value;

    const savedInfo = {
      name,
      email,
      phone : phoneNumber,
      status
    }

    const url = `https://e-commerce-site-back-end.vercel.app/users/${users[0]._id}`
    fetch(url, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(savedInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Saved",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });


  };

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center mt-10">
          {/* Page content here */}
          <div className="border p-8 shadow-md border-white mx-10">
            <h1 className="text-left font-bold text-xl py-3">My Profile</h1>
            <hr />
            <p className="pt-3">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            {edit ? (
              <>
                <form onSubmit={handleSaveInfo}>
                  <div className="flex gap-10 my-4">
                    <label htmlFor="">Student Name :</label>
                    <input
                      type="text"
                      className="w-[250px] border text-center"
                      defaultValue={users[0]?.name}
                      name="name"
                      id=""
                    />
                  </div>
                  <hr />
                  <div className="flex gap-10 my-4">
                    <label htmlFor="">Student Email :</label>
                    <input
                      type="email"
                      className="w-[250px] border text-center"
                      defaultValue={users[0]?.email}
                      name="email"
                      id=""
                    />
                  </div>
                  <hr />
                  <div className="flex gap-10 my-4">
                    <label htmlFor="">Student phone :</label>
                    <input
                      type="number"
                      className="w-[250px] border text-center"
                      defaultValue={users[0]?.phone || "not found"}
                      name="phone"
                      id=""
                    />
                  </div>
                  <hr />
                  <div className="flex gap-10 my-4">
                    <label htmlFor="">Status :</label>
                    <select
                      name="status"
                      className="w-[250px] border text-center"
                    >
                      <option value="">Select an option</option>
                      <option>Active</option>
                      <option>Inactive</option>
                      
                    </select>
                  </div>
                  <hr />

                  <input
                    type="submit"
                    className=" mt-4 transition-all duration-500 ease-out hover:scale-105 border px-6 py-3 bg-[#2f4f73] border-[#2f4f73] shadow-lg text-white"
                    value="Save"
                    name=""
                    id=""
                    // onClick={() => setEdit(false)}
                  />
                </form>
              </>
            ) : (
              <>
                <p className="font-medium text-base py-4">
                  <span className="text-left pr-10">Student Name</span>{" "}
                  <span className="pr-5">:</span> {users[0]?.name}
                </p>
                <hr />
                <p className="font-medium text-base py-4">
                  <span className="text-left pr-10">Student Email</span>{" "}
                  <span className="pr-5">:</span> {users[0]?.email}
                </p>
                <hr />
                <p className="font-medium text-base py-4">
                  <span className="text-left pr-10">Student Phone</span>{" "}
                  <span className="pr-5">:</span>{" "}
                  {users[0]?.phone || "(Phone not found)"}
                </p>
                <hr />
                <p className="font-medium text-base py-4">
                  <span className="text-left pr-24">Status</span>{" "}
                  <span className="pr-5">:</span> {users[0]?.status}
                </p>
                <hr />
              </>
            )}
            <p className="py-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <button
              onClick={() => setEdit(true)}
              className="flex items-center gap-3 transition-all duration-500 ease-out hover:scale-105 border px-6 py-3 bg-[#2f4f73] border-[#2f4f73] shadow-lg text-white"
            >
              {" "}
              <FaPen /> Edit Profile
            </button>
          </div>

          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-10 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div className="student-profile">
              <img
                src={users[0]?.photo}
                alt="Student"
                className="rounded-full p-5"
              />
              <h1 className="font-bold text-3xl pb-5">{users[0]?.name}</h1>
              <hr />
              <div className="font-medium ">
                <p className="py-2">Email: {users[0]?.email}</p>
                <p>Student UID: {user?.uid}</p>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Profile;
