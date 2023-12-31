import React from "react";
import Swal from "sweetalert2";

const Modal = ({
  CollegeName,
  candidateName,
  email,
  subject,
  photo,
  address,
  dateOfBirth,
  phoneNumber,
  _id,
  index,
}) => {
  //   console.log(window.my_modal_5, "window");


  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const review = form.review.value;
    const rating = form.rating.value;
    const numberRating = parseFloat(rating)

    const feedback = {
      review,
      rating : numberRating
    };

    const url = `https://e-commerce-site-back-end.vercel.app/admissionApply/${_id}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(feedback),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Thanks for your Feedback",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };
  return (
    <>
      <tr>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={photo} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        <th>{index + 1}</th>
        <td>{CollegeName}</td>
        <td>{candidateName}</td>
        <td>{subject}</td>
        <td>{phoneNumber}</td>
        <td>
          <label
            htmlFor={_id}
            className="border px-7 py-2 rounded bg-image text-black transition-all duration-500 ease-linear hover:scale-105 transform-cpu"
          >
            {" "}
            FeedBack
          </label>
          <input type="checkbox" id={_id} className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">{CollegeName}</h3>
              <form
                onSubmit={handleFeedbackSubmit}
                method="dialog"
                className="modal-box"
              >
                <div className="lg:flex mb-8">
                  <div className="form-control lg:w-1/2">
                    <label className="label">
                      <span className="label-text">Review</span>
                    </label>
                    <label className="input-group">
                    <textarea className="textarea" name="review" placeholder="Bio"></textarea>
                    </label>
                  </div>
                  <div className="form-control lg:w-1/2  lg:ml-4">
                    <label className="label">
                      <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="number"
                        name="rating"
                        placeholder="Rating"
                      
                        className="input input-bordered w-full"
                        min="0"
                        max="5"
                        
                      />
                    </label>
                  </div>
                </div>

                <input
                  type="submit"
                  value="Send"
                  className=" border bg-image border-[#f36b3b] rounded-lg px-8 py-2 text-white duration-300  w-full   text-center cursor-pointer"
                />
              </form>
              <div className="modal-action">
                <label htmlFor={_id} className="btn">
                  Close!
                </label>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Modal;
