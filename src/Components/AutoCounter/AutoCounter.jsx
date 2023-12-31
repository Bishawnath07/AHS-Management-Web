import { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import { MDBCard, MDBCardBody } from "mdbreact";
import './autocounter.css'
// import img from '../../../public/bg-02.jpg'

const AutoCounter = () => {
  const [onScroll, setOnScroll] = useState(false);

  return (
    <div >
      <div className=" featured-items text-white bg-[#3e1e7e] mt-5 ">

        <div>

          <div className=" p-5 md:p-0">
            <ReactVisibilitySensor>
              {({ isVisible }) => (
                <MDBCard>
                  <div className="my-7">
                    <h3 className="text-center text-3xl font-bold ">Statistics</h3>
                    <h3 className="text-center text-2xl  ">Our Organization At a Glance</h3>
                  </div>
                  <MDBCardBody>
                    <div className="grid grid-cols-2
                     md:grid-cols-3 lg:grid-cols-4 items-center gap-5  md:gap-10">
                      <div className="col-3 grid place-items-center">
                        <h3 className="text-[12x] md:text-xl font-bold text-center mb-5 ">Teachers</h3>
                        <img src="https://www.shaistaganjhighschool.edu.bd/assets/img/icon/conference-background-selected.png" alt="" />
                        <div className="  p-5 rounded-md">

                          <h4 className="text-[12x] md:text-xl font-bold">
                            {isVisible && !onScroll ? (
                              <CountUp start={0} end={20} onEnd={() => setOnScroll(true)} />
                            ) : (
                              20
                            )}
                          </h4>
                        </div>
                      </div>
                      <div className="col-3 grid place-items-center">
                        <h3 className="text-[12x] md:text-xl font-bold text-center mb-5 "> Graduates</h3>
                        <img src="https://www.shaistaganjhighschool.edu.bd/assets/img/icon/student-male.png" alt="" />
                        <div className="  p-5 rounded-md">

                          <h4 className="text-[12x] md:text-xl font-bold ">
                            {isVisible && !onScroll ? (
                              <CountUp start={0} end={1254} onEnd={() => setOnScroll(true)} />
                            ) : (
                              1254
                            )}
                          </h4>
                        </div>
                      </div>
                      <div className="col-3 grid place-items-center">
                        <h3 className="text-[12x] md:text-xl font-bold text-center mb-5 ">Class</h3>
                        <img src="https://www.shaistaganjhighschool.edu.bd/assets/img/icon/classroom.png" alt="" />
                        <div className="  p-5 rounded-md">

                          <h4 className="text-[12x] md:text-xl font-bold">
                            {isVisible && !onScroll ? (
                              <CountUp start={0} end={7} onEnd={() => setOnScroll(true)} />
                            ) : (
                              7
                            )}
                          </h4>
                        </div>
                      </div>
                      <div className="col-3 grid place-items-center ">
                        <h3 className="text-[12x] md:text-xl font-bold text-center mb-5 ">Stuents</h3>
                        <img src="https://www.shaistaganjhighschool.edu.bd/assets/img/icon/teacher.png" alt="" />
                        <div className="  p-5 rounded-md">

                          <h4 className="text-[12x] md:text-xl font-bold">
                            {isVisible && !onScroll ? (
                              <CountUp start={0} end={500} onEnd={() => setOnScroll(true)} />
                            ) : (
                              500
                            )}
                          </h4>
                        </div>
                      </div>

                    </div>
                  </MDBCardBody>
                </MDBCard>
              )}
            </ReactVisibilitySensor>
          </div>
        </div>
      </div>
      {/* <div className="mx-10 mt-10 md:mt-20 md:flex justify-between gap-10">
        <div className="md:w-1/2">
          <img src={img} alt="" />
        </div>
        <div >
          <h1 className="text-[14px] md:text-6xl font-bold my-5">Find the right <br />learning option</h1>
          <p className="font-semibold text-[14x] md:text-xl my-5">Start one of our 1000 high quality courses
            from the worlds leading experts today!</p>
          <button className="btn btn-outline btn-warning">Find Course</button>
        </div>
      </div> */}
    </div>
  );
};


export default AutoCounter;

