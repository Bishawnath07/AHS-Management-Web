import "./managingcomite.css"

const ManagingCommite = () => {
    return (
        <div className="max-w-7xl mx-auto bg-images bg-fixed">
            <h1 className="text-[20px] md:text-3xl font-bold  text-center md:my-10">Managing <span className="text-[#020085] ">Committee</span></h1>
            <div className=" grid place-items-center mx-auto mb-5 shadow-xl py-4 w-[22rem] bg-lime-700">

                <div
                    className="statics_singel_student wow zoomIn"
                    data-wow-delay="0.4s"
                    style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'zoomIn' }}
                >
                    <div className="student_statics_img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9sYEa3-HIpJz3h8BQnDcsGUytePayeOnBuA&usqp=CAU" alt="Member Avatar" />
                    </div>
                    <h4 className="mt-2">MR. Roy </h4>
                    <h6>Chairman</h6>
                    <span className="w-100 float-left">
                        <strong>Contact</strong> : +88017xxxxxxxx
                    </span>
                </div>

            </div>
            <div className="my-10 md:flex gap-5">

                <div className="enroll-form md:w-1/2">
                    <div className="form-title  ">
                        <h2 className="events">Events</h2>
                    </div>
                    {/* Form */}
                    <div className="learnedu-sidebar left">
                        {/* Posts */}
                        <div className=" single-widget posts">
                            {/* Single Post */}
                            <div className="single-post">
                                <div className="post-img">
                                    <div className="evdate">
                                        <div className="ev1 color_theme">
                                            <h2>19</h2>
                                        </div>
                                        <div className="ev2 nstyle">
                                            <h4>Sep</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-info">
                                    <h4>
                                        <a href="20">Shiekh Rassel Corner</a>
                                    </h4>
                                    <span className="notice_date">19 Sep, 2022</span>
                                </div>
                            </div>
                            <div className=" single-post">
                                <div className="post-img">
                                    <div className="evdate">
                                        <div className="ev1 color_theme">
                                            <h2>15</h2>
                                        </div>
                                        <div className="ev2 nstyle">
                                            <h4>Aug</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-info">
                                    <h4>
                                        <a href="19">15 August-2022</a>
                                    </h4>
                                    <span className="notice_date">15 Aug, 2022</span>
                                </div>
                            </div>
                            <div className=" single-post">
                                <div className="post-img">
                                    <div className="evdate">
                                        <div className="ev1 color_theme">
                                            <h2>17</h2>
                                        </div>
                                        <div className="ev2 nstyle">
                                            <h4>Mar</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-info">
                                    <h4>
                                        <a href="18">17 March 2022</a>
                                    </h4>
                                    <span className="notice_date">17 Mar, 2022</span>
                                </div>
                            </div>

                        </div>


                    </div>


                </div>


                <div className="enroll-form md:w-1/2">
                    <div className="form-title ">
                        <h2 className="events">News</h2>
                    </div>
                    {/* Form */}
                    <div className="learnedu-sidebar left">
                        {/* Posts */}
                        <div className=" single-widget posts">
                            {/* Single Post */}
                            <div className="single-post">

                                <div className="post-info">
                                    <h4>
                                        <a href="20">UNO visited our school</a>
                                    </h4>
                                    <span className="notice_date">19 Sep, 2022</span>
                                </div>
                            </div>
                            <div className=" single-post">

                                <div className="post-info">
                                    <h4>
                                        <a href="19">Debate Competition Held</a>
                                    </h4>
                                    <span className="notice_date">15 Aug, 2022</span>
                                </div>
                            </div>
                            <div className=" single-post">

                                <div className="post-info">
                                    <h4>
                                        <a href="18">17 March </a>
                                    </h4>
                                    <span className="notice_date">17 Mar, 2022</span>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>

            </div>
        </div>
    );
};

export default ManagingCommite;