import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Fade } from "react-awesome-reveal";
import { ToastContainer, toast } from "react-toastify";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Swal from "sweetalert2";

const ContactUs = () => {
  const form = useRef();
  const handel = () => toast('SEND SUCCESS')

  const sendEmail = (e) => {
    e.preventDefault();

    const formElement = e.target; // Get the form element from the event

    emailjs
      .sendForm(
        "service_tiwy4ix",
        "template_divgho6",
        formElement,
        "s2xcA0gxQ2iHHXvsT"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your Message has been saved',
              showConfirmButton: false,
              timer: 1500
            })
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="border-[1px] border-black rounded-lg p-5 max-w-7xl mx-auto ">
      <div className="max-w-[1240px] md:py-20 mx-auto px-3">
        <h1 className="text-black text-center text-4xl font-bold">
          Contact With ME
        </h1>
        <hr className="border w-[100px] mx-auto border-black] mt-3" />
        <div className="md:grid md:grid-cols-7 py-12">
          <div className="w-full col-span-2  md:border-r-2 lg:px-3 px-5 border-black] ">
            <Fade
              triggerOnce={0.6}
              delay={300}
              direction="left"
              cascade
              damping={0.5}
              distance="30px"
            >
              <div className="grid w-full border-b-2 border-black] py-5 gap-5 mx-2 grid-cols-4 ">
                <div className="flex flex-col items-center lg:pl-0 pl-14 col-span-3">
                  <p className="text-black ">Location</p>
                  <p className="text-black font-bold">Dinajpur ,Bangladesh</p>
                </div>
              </div>
              <div className="grid w-full border-b-2 border-black] py-5 gap-5 mx-2 grid-cols-4">
                <div className="flex flex-col items-center lg:pl-0 pl-14 col-span-3">
                  <p className="text-black ">Email</p>
                  <p className="text-black font-bold ">dpi.bd@gmail.com</p>
                </div>
              </div>
              <div className="grid w-full border-b-2 border-black] py-5 gap-5 mx-2 grid-cols-4">
                <div className="flex flex-col items-center lg:pl-0 pl-14 col-span-3">
                  <p className="text-black ">Phone</p>
                  <p className="text-black font-bold ">+8801xxxxxxxx</p>
                </div>
              </div>
              <div className="grid w-full border-b-2 border-black] py-5 gap-5 mx-2 items-center grid-cols-4 ">
                <div className="flex flex-col items-center lg:pl-0 pl-14 col-span-3">
                  <p className="text-black ">Social Links</p>
                  <div className="flex items-center gap-8 my-3">
                    <a
                      href="https://www.facebook.com/profile.php?id=100016110516660"
                      className="p-2 border-2 border-[#1f2ef7d8] rounded-md transform rotate-45 hover:bg-[#1f2ef7d8] hover:text-black  text-[#1f2ef7d8] hover:scale-110 transition-all duration-300 cursor-pointer"
                    >
                      <FaFacebookF className="text-2xl transform -rotate-45" />
                    </a>
                    <a
                      href="https://github.com/Bishawnath07"
                      className="p-2 border-2 border-[#1f2ef7d8] rounded-md transform rotate-45 hover:bg-[#1f2ef7d8] hover:text-black  text-[#1f2ef7d8] hover:scale-110 transition-all duration-300 cursor-pointer"
                    >
                      <FaGithub className="text-2xl transform -rotate-45" />
                    </a>
                    <a
                      href="https://www.linkedin.com"
                      className="p-2 border-2 border-[#1f2ef7d8] rounded-md transform rotate-45 hover:bg-[#1f2ef7d8] hover:text-black  text-[#1f2ef7d8] hover:scale-110 transition-all duration-300 cursor-pointer"
                    >
                      <FaLinkedinIn className="text-2xl transform -rotate-45 " />
                    </a>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="w-full col-span-5">
            <Fade
              triggerOnce={0.6}
              delay={300}
              direction="right"
              cascade
              damping={0.5}
              distance="30px"
            >
              <form
                ref={form}
                onSubmit={sendEmail}
                className="mx-auto  w-[95%]"
              >
                <input
                  type="text"
                  name="user_name"
                  id=""
                  placeholder="Name"
                  className=" p-3 my-5 outline-none bg-[#e7ebe8] hover:shadow-black  shadow-inner text-black   w-full rounded-md"
                />
                <input
                  type="email"
                  name="user_email"
                  id=""
                  placeholder="Email"
                  className="p-3 my-2 text-black  outline-none hover:shadow-black shadow-inner bg-[#e7ebe8] w-full rounded-md"
                />
                <textarea
                  name="message"
                  id=""
                  placeholder="Message"
                  className="w-full p-3 my-5 text-black  outline-none hover:shadow-black shadow-inner h-[150px] resize-none bg-[#e7ebe8] rounded-md"
                />
                <input
                  onClick={handel}
                  type="submit"
                  value="Send Message"
                  className="py-3 px-6 my-3  font-semibold text-black  hover:bg-black hover:text-white  border-2 border-[#d0eed5] rounded-md hover:shadow-black] hover:scale-110 transition-all duration-300"
                />
              </form>
            </Fade>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
