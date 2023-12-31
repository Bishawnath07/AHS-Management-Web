import '../NoticeBoard/noticeboard.css'

import img1 from './images/box1.jpg'
import img2 from './images/box2.jpg'
import img3 from './images/box3.jpg'
import img4 from './images/box4.jpg'
import img5 from './images/box5.jpg'
import img6 from './images/box6.jpg'
import img7 from './images/box7.jpg'
import img8 from './images/box8.jpg'
import img9 from './images/box9.jpg'
import img10 from './images/box10.jpg'
import img11 from './images/box11.jpg'
import img12 from './images/box12.jpg'
import img13 from './images/box13.jpg'
import img14 from './images/box14.jpg'
import img15 from './images/box15.jpg'
import img16 from './images/box16.jpg'
import img17 from './images/box17.jpg'
import img18 from './images/box18.jpg'
import img20 from './images/box20.jpg'
import img21 from './images/box21.jpg'
import img22 from './images/box22.jpg'
import img23 from './images/box23.jpg'
import img24 from './images/box24.jpg'
import img25 from './images/box25.jpg'
import { HiOutlinePaperAirplane } from "react-icons/hi2";


const NoticeCart = () => {
    return (
        <div>
            <div className="smallCont grid  grid-cols-1 md:grid-cols-2 gap-5 md:mt-10">
                <div className="six columns box service-box  border-[1px] border-[#ccc] p-5 bg-[#F5F5F5] ">
                    <h4 className='font-bold text-[19px] text-black '>Golden Jubilee Corner of Independence</h4>
                    <img src={img1} alt="Golden Jubilee Corner of Independence" width="110" />
                    <div id="notice-board-ticker">
                        <ul>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane>
                                <a href="/nodes/view/800">demo</a>
                            </li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane>
                                <a href="/nodes/view/796">NOC of Md. Sarof Uddin Sarkar, Craft Instructor(Shop), Power</a>
                            </li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane>
                                <a href="/nodes/view/793">NOC of Md. Jabed Ali, Chief Instructor(Tech/Mechanical)</a>
                            </li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane>
                                <a href="/nodes/view/713">Stipend Related Notice</a>
                            </li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane>
                                <a href="/nodes/view/711">NOC, Md. Safiul Alam, Head Assistant</a>
                            </li>
                        </ul>
                    </div>
                    <a className="btn-right right" href="/notice">More</a>
                </div>
                <div className="six columns service-box  box  bg-[#F5F5F5] border-[1px] border-[#ccc] p-5 ">
                    <h4 className='font-bold text-[19px] text-black ' >className Routine</h4>
                    <div className='flex gap-5'>
                        <img src={img2} alt="className Routine" className='h-28' />
                        <ul className="caption fade-caption" >
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/794">2nd, 4th and 6th Semester className Routine 2023</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/690">1st, 3rd, 5th and 7th Semester Students className Routine-2022</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/581">className routine 2020</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/579">className Routine for 2nd, 4th &amp; 6th Semister (For Teachers)</a></li>
                        </ul>
                    </div>
                    <a className="btn-right right" href="/className_routine">More</a>
                </div>
                <div className="six columns service-box  bg-[#F5F5F5] border-[1px] border-[#ccc] p-5 box">
                    <h4 className='font-bold text-[19px] text-black '> Syllabus</h4>
                    <div className='flex gap-5'>
                        <img src={img3} alt="Syllabus" width="110" />
                        <ul className="caption fade-caption" >
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/612">Subject Code</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/608">Syllabus-1</a></li>
                        </ul>
                    </div>
                    <a className="btn-right right" href="/syllabus">More</a>
                </div>
                <div className="six columns service-box  bg-[#F5F5F5] border-[1px] border-[#ccc] p-5 box">
                    <h4 className='font-bold text-[19px] text-black '>Exam Routine</h4>                    <div className='flex gap-5'>
                        <img src={img4} alt="Exam Routine" width="110" />
                        <ul className="caption fade-caption" >
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/609">Exam Routine-1</a></li>
                        </ul>
                    </div>
                    <a className="btn-right right" href="/exam_routine">More</a>
                </div>
                <div className="six columns service-box  bg-[#F5F5F5] border-[1px] border-[#ccc] p-5 box">
                    <h4 className='font-bold text-[19px] text-black '>Result</h4>
                    <div className='flex gap-5'>
                        <img src={img5} alt="Result" width="110" />
                        <ul className="caption fade-caption" >
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/798">1st Semester Result </a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/660">SUPPLEMENTARY EXAMINATION - THIRD SEMESTER (2019 - 2020)</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/659">SUPPLEMENTARY EXAMINATION - FIRST SEMESTER (2020 - 2021)</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/606">Demo-1</a></li>
                        </ul>
                    </div>
                    <a className="btn-right right" href="/result">More</a>
                </div>
                <div className="six columns service-box  bg-[#F5F5F5] border-[1px] border-[#ccc] p-5 box">
                    <h4 className='font-bold text-[19px] text-black '>About Department</h4>
                    <div className='flex gap-5' >
                        <img src={img6} alt="About Department" width="110" />
                        <ul className="caption fade-caption" >
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/607">Demo-1</a></li>
                        </ul>
                    </div>
                    <a className="btn-right right" href="/department_block">More</a>
                </div>
                <div className="six columns service-box  bg-[#F5F5F5] border-[1px] border-[#ccc] p-5 box">
                    <h4 className='font-bold text-[19px] text-black '>Citizen Charter</h4>
                    <div className='flex gap-5' >
                        <img src={img7} alt="Citizen Charter" width="110" />
                        <ul className="caption fade-caption" >
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/716">Focal Point</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/715">Citizen Charter</a></li>
                        </ul>
                    </div>
                    <a className="btn-right right" href="/citizen_charter">More</a>

                </div>
                <div className="six columns service-box  bg-[#F5F5F5] border-[1px] border-[#ccc] p-5 box">
                    <h4 className='font-bold text-[19px] text-black '>About Institute</h4>
                    <div className='flex gap-5' >
                        <img src={img8} alt="About Institute" width="110" />
                        <ul className="caption fade-caption" >
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/720">Mission &amp; Vission</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/719">Work Distribution, DTE</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/718">Citizen Charter</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/717">DTE Profile</a></li>
                        </ul>
                    </div>
                    <a className="btn-right right" href="/about_dpi">More</a>
                </div>
                <div className="six columns service-box  bg-[#F5F5F5] border-[1px] border-[#ccc] p-5 box">
                    <h4 className='font-bold text-[19px] text-black '>Office Order/Circular/NOC</h4>
                    <div className='flex gap-5' >
                        <img src={img9} alt="Office Order/Circular/NOC" width="110" />
                        <ul className="caption fade-caption" >
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/724">Office Order</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/723">Transfer Order</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/722">NOC Order</a></li>
                        </ul>
                    </div>
                    <a className="btn-right right" href="/noc">More</a>
                </div>
                <div className="six columns service-box  bg-[#F5F5F5] border-[1px] border-[#ccc] p-5 box">
                    <h4 className='font-bold text-[19px] text-black '>Law &amp; Publications</h4>
                    <div className='flex gap-5' >
                        <img src={img10} alt="Law &amp; Publications" width="110" />
                        <ul className="caption fade-caption" >
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/727">National Edu. Policy 2010</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/726">ICT Policy 2015</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/725">NSDP 2011</a></li>
                        </ul>
                    </div>
                    <a className="btn-right right" href="/law_publications">More</a>
                </div>
                <div className="six columns service-box  bg-[#F5F5F5] border-[1px] border-[#ccc] p-5 box">
                    <h4 className='font-bold text-[19px] text-black '>Forms &amp; Publications</h4>
                    <div className='flex gap-5' >
                        <img src={img11} alt="Forms &amp; Publications" width="110" />
                        <ul className="caption fade-caption" >
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/731">Application form for GPF</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/730">Application for travels abroad</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/729">Family Pention Form</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/728">Government Forms</a></li>
                        </ul>
                    </div>
                    <a className="btn-right right" href="/forms_publications">More</a>
                </div>
                <div className="six columns service-box  bg-[#F5F5F5] border-[1px] border-[#ccc] p-5 box">
                    <h4 className='font-bold text-[19px] text-black '>Training Context</h4>
                    <div className='flex gap-5' >
                        <img src={img12} alt="Training Context" width="110" />
                        <ul className="caption fade-caption" >
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/735">LocalTraining</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/734">Forefign Training</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/733">Training Schedule’ 2023-24</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/732">Training Schedule’ 2022-2023</a></li>
                        </ul>
                    </div>
                    <a className="btn-right right" href="/training_context">More</a>
                </div>
                <div className="six columns service-box  bg-[#F5F5F5] border-[1px] border-[#ccc] p-5 box">
                    <h4 className='font-bold text-[19px] text-black '>e-Tender</h4>
                    <div className='flex gap-5' >
                        <img src={img13} alt="e-Tender" width="110" />
                        <ul className="caption fade-caption" >
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/739">Invitation for Tender</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/738">P. Plane, DTE (F.Y-2023-24)</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/737">APP for Institute</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/736">APP for Project</a></li>
                        </ul>
                    </div>
                    <a className="btn-right right" href="/e-tender">More</a>
                </div>
                <div className="six columns service-box  bg-[#F5F5F5] border-[1px] border-[#ccc] p-5 box">
                    <h4 className='font-bold text-[19px] text-black '>Innovation</h4>
                    <div className='flex gap-5' >
                        <img src={img14} alt="Innovation" width="110" />
                        <ul className="caption fade-caption" >
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/743">Annual Innovation Action Plan</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/742">Innovation Team</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/741">Innovation Projects</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/740">Database</a></li>
                        </ul>
                    </div>
                    <a className="btn-right right" href="/innovation">More</a>
                </div>
                <div className="six columns service-box  bg-[#F5F5F5] border-[1px] border-[#ccc] p-5 box">
                    <h4 className='font-bold text-[19px] text-black '>NIS</h4>
                    <div className='flex gap-5' >
                        <img src={img15} alt="NIS" width="110" />
                        <ul className="caption fade-caption" >
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/747">National Integrity Strategy</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/746">Work Plan of DTE</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/745">National Integrity Strategy Committee</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/744">Announcements of Transparent , DTE</a></li>
                        </ul>
                    </div>
                    <a className="btn-right right" href="/nis">More</a>
                </div>
                <div className="six columns service-box  bg-[#F5F5F5] border-[1px] border-[#ccc] p-5 box">
                    <h4 className='font-bold text-[19px] text-black '>Annual Performance Agreement</h4>
                    <div className='flex gap-5' >
                        <img src={img16} alt="Annual Performance Agreement" width="110" />
                        <ul className="caption fade-caption" >
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/751">Policy</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/750">Quarterly Progress Report</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/749">Under the DTE Signed</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/748">APA</a></li>
                        </ul>
                    </div>
                    <a className="btn-right right" href="/annual_performance">More</a>
                </div>
                <div className="six columns service-box  bg-[#F5F5F5] border-[1px] border-[#ccc] p-5 box">
                    <h4 className='font-bold text-[19px] text-black '>Grievance Redress System</h4>
                    <div className='flex gap-5' >
                        <img src={img17} alt="Grievance Redress System" width="110" />
                        <ul className="caption fade-caption" >
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/755">GRS and Appellate Officers</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/754">Rules</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/753">Online complaint</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/752">GRS activities</a></li>
                        </ul>
                    </div>
                    <a className="btn-right right" href="/grievance_redress">More</a>
                </div>
                <div className="six columns service-box  bg-[#F5F5F5] border-[1px] border-[#ccc] p-5 box">
                    <h4 className='font-bold text-[19px] text-black '>TVET Campaign</h4>
                    <div className='flex gap-5' >
                        <img src={img18} alt="TVET Campaign" width="110" />
                        <ul className="caption fade-caption" >
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/756">TVET Campaign</a></li>
                        </ul>
                    </div>
                    <a className="btn-right right" href="/tvet">More</a>
                </div>
                <div className="six columns service-box  bg-[#F5F5F5] border-[1px] border-[#ccc] p-5 box">
                    <h4 className='font-bold text-[19px] text-black '>SDG</h4>
                    <div className='flex gap-5' >
                        <img src={img20} alt="SDG" width="110" />
                        <ul className="caption fade-caption" >
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/760">SDG Action Plan</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/759">GO</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/758">এসডিজি সংক্রান্ত জাতীয় দলিল </a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/757">Report, SDG</a></li>
                        </ul>
                    </div>
                    <a className="btn-right right" href="/sdg">More</a>
                </div>
                <div className="six columns service-box  bg-[#F5F5F5] border-[1px] border-[#ccc] p-5 box">
                    <h4 className='font-bold text-[19px] text-black '>HRMIS of DTE</h4>
                    <div className='flex gap-5' >
                        <img src={img21} alt="HRMIS of DTE" width="110" />
                        <ul className="caption fade-caption" >
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/764">HRMIS [Employee]</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/763">PDS Check Info</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/762">Notice</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/761">Institute Login [HRMIS]</a></li>
                        </ul>
                    </div>
                    <a className="btn-right right" href="/hrmis">More</a>
                </div>
                <div className="six columns service-box  bg-[#F5F5F5] border-[1px] border-[#ccc] p-5 box">
                    <h4 className='font-bold text-[19px] text-black '>Others</h4>
                    <div className='flex gap-5' >
                        <img src={img22} alt="Others" width="110" />
                        <ul className="caption fade-caption" >
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/768">Focal Point/Team Leader</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/767">Best Practice</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/766">TVET</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/765">TVET Action Plan</a></li>
                        </ul>
                    </div>
                    <a className="btn-right right" href="/others">More</a>
                </div>
                <div className="six columns service-box  bg-[#F5F5F5] border-[1px] border-[#ccc] p-5 box">
                    <h4 className='font-bold text-[19px] text-black '>Research and Knowledge Management Cell</h4>
                    <div className='flex gap-5' >
                        <img src={img23} alt="Research and Knowledge Management Cell" width="110" />
                        <ul className="caption fade-caption" >
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/772">Notice/Office Order</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/771">Notification</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/770">Nitimala</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/769">Research Activities</a></li>
                        </ul>
                    </div>
                    <a className="btn-right right" href="/research_knowledge">More</a>
                </div>
                <div className="six columns service-box  bg-[#F5F5F5] border-[1px] border-[#ccc] p-5 box">
                    <h4 className='font-bold text-[19px] text-black '>Institutional Contract</h4>
                    <div className='flex gap-5' >
                        <img src={img24} alt="Institutional Contract" width="110" />
                        <ul className="caption fade-caption" >
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/776">EC</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/775">POLY</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/774">TSC</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/773">Others</a></li>
                        </ul>
                    </div>
                    <a className="btn-right right" href="/institutional_contract">More</a>
                </div>
                <div className="six columns service-box  bg-[#F5F5F5] border-[1px] border-[#ccc] p-5 box">
                    <h4 className='font-bold text-[19px] text-black '>“Blended Education ”</h4>
                    <div className='flex gap-5' >
                        <img src={img25} alt="“Blended Education ”" width="110" />
                        <ul className="caption fade-caption" >
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/780">E-Campus</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/779">YouTube Channel</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/778">Facebook Channel</a></li>
                            <li className="test flex gap-2 items-center  text-[13px]  text-[#595757]"><HiOutlinePaperAirplane className='text-[#429137] w-10'></HiOutlinePaperAirplane><a href="/nodes/view/777">onlinetvet.com</a></li>
                        </ul>
                    </div>
                    <a className="btn-right" href="/blended_education">More</a>
                </div>
            </div >
        </div >

    );
};

export default NoticeCart;