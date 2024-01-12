import { Link } from "react-router-dom";
import logo from './Images/logos.png'
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  console.log(showNavbar)

  const handleClick = () => {
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }

  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 100) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  const navItems = (
    <>
      <li onClick={handleClick} className="hover:text-blue-700 text-black    rounded-sm  md:text-[16px] text-[12px] mb-2 md:font-bold  font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li onClick={handleClick} className="hover:text-blue-700 text-black    rounded-sm  md:text-[16px] text-[12px] mb-2 md:font-bold  font-semibold">
        <Link to="/admission">
          <div className="dropdown dropdown-hover">
            <div className="flex items-center gap-2">
              <label tabIndex={0} className=" ">Admission</label>
            </div>

          </div>
        </Link>
      </li>
      <li className=" text-black  cursor-pointer  rounded-sm  md:text-[16px] text-[12px] mb-2 md:font-bold  font-semibold">
        <details className="z-20">
          <summary >Facilities</summary>
          <ul className="ml-5">
            <Link to="/library"><li className="hover:bg-slate-300 p-[2px] rounded-sm cursor-pointer "><a onClick={handleClick} >Library</a></li></Link>
            <Link to="/playground"><li className="hover:bg-slate-300 p-[2px] rounded-sm cursor-pointer "><a onClick={handleClick} >Play Ground</a></li></Link>
            <Link to="/physicslab"><li className="hover:bg-slate-300 p-[2px] rounded-sm cursor-pointer "><a onClick={handleClick} >Physics Lab Lab</a></li></Link>

            <li className="hover:bg-slate-300 p-[2px] rounded-sm cursor-pointer "><a onClick={handleClick} ><Link to="/biologylab">Biology Lab</Link> Lab</a></li>

            <li className="hover:bg-slate-300 p-[2px] rounded-sm cursor-pointer "><a onClick={handleClick} ><Link to="/ictlab">ICT Lab</Link> </a></li>

            <Link to="/chemistrylab"><li className="hover:bg-slate-300 p-[2px] rounded-sm cursor-pointer "><a onClick={handleClick} >Chemistry Lab </a></li></Link>

            <Link to="/cocurricular"><li className="hover:bg-slate-300 p-[2px] rounded-sm cursor-pointer "><a onClick={handleClick} >Co Curricular Activity</a></li></Link>

          </ul>
        </details>
      </li>
      <li className=" text-black cursor-pointer   rounded-sm  md:text-[16px] text-[12px] mb-2 md:font-bold  font-semibold">
        <details className="z-20">
          <summary>Academic</summary>
          <ul className="ml-2">
            <Link to="/schedule">
              <li className="hover:bg-slate-300 p-[2px] rounded-sm cursor-pointer "><a onClick={handleClick}> Class Schedule</a></li></Link>
            <Link to="/teachers">
              <li className="hover:bg-slate-300 p-[2px] rounded-sm cursor-pointer "><a onClick={handleClick}> Our Teachers</a></li></Link>
            <Link to="/staffs">
              <li className="hover:bg-slate-300 p-[2px] rounded-sm cursor-pointer "><a onClick={handleClick}> Our Staffs</a></li></Link>
            <Link to="/rules">
              <li className="hover:bg-slate-300 p-[2px] rounded-sm cursor-pointer "><a onClick={handleClick}> Academic Rules</a></li></Link>
            <Link to="/results">
              <li className="hover:bg-slate-300 p-[2px] rounded-sm cursor-pointer "><a onClick={handleClick}> Academic Result</a></li></Link>
            <Link to="/calandar"><li className="hover:bg-slate-300 p-[2px] rounded-sm cursor-pointer "><a onClick={handleClick}> Academic Calendar</a></li></Link>
            <Link to="/attendance"><li className="hover:bg-slate-300 p-[2px] rounded-sm cursor-pointer "><a onClick={handleClick}> Attendance Sheet</a></li></Link>
            <Link to="information"><li className="hover:bg-slate-300 p-[2px] rounded-sm cursor-pointer "><a onClick={handleClick}> Leave Information</a></li></Link>

          </ul>
        </details>
      </li>

      <li onClick={handleClick} className="hover:text-blue-700 text-black    rounded-sm  md:text-[16px] text-[12px] mb-2 md:font-bold  font-semibold">
        <Link to="/result">
          <div className="dropdown dropdown-hover">
            <div className="flex items-center gap-2">
              <label tabIndex={0} className=" ">Result</label>
              {/* <FaArrowDown /> */}
            </div>
          </div>
        </Link>
      </li>
      <li onClick={handleClick} className="hover:text-blue-700 text-black    rounded-sm  md:text-[16px] text-[12px] mb-2 md:font-bold  font-semibold">
        <Link to="/gallery">
          <div className="dropdown dropdown-hover">
            <div className="flex items-center gap-2">
              <label tabIndex={0} className=" ">Gallery</label>
              {/* <FaArrowDown /> */}
            </div>

          </div>
        </Link>
      </li>
      <li onClick={handleClick} className="hover:text-blue-700 text-black    rounded-sm  md:text-[16px] text-[12px] mb-2 md:font-bold  font-semibold">
        <Link to="/contact">Contact</Link>
      </li>



    </>
  );

  return (
    <>
      <div className="max-w-7xl mx-auto mt-4">
        <div className=" flex bg-base-100">

          <div className="">
            <a className="btn btn-ghost text-xl"><img className="md:w-[100px] w-16 h-6 md:h-[60px] " src={logo} alt="" /></a>
          </div>
          <div>
            <h1 className="text-[px] md:text-5xl font-bold text-black regular">Alokjhari High School</h1>
            <div className="md:inline-flex gap-[3px] md:gap-5 md:mt-5"><h1 className="text-[12px] md:text-[15px] font-bold text-black regular">আলোকঝাড়ি উচ্চ বিদ্যালয়</h1> <span className="text-[12px] md:text-[15px] font-bold text-black ">EEIIN : 120614</span>   <span className="text-[12px] md:text-[15px] font-bold text-black ">Dinajpur</span></div>
          </div>
          <div className="dropdown dropdown-bottom  flex justify-end nav-btn md:hidden ">
            <div tabIndex={0} className=" m-1">
              <label className="btn btn-circle swap swap-rotate">

                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

                {/* hamburger icon */}
                <svg className="swap fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

              </label>
            </div>
            <ul tabIndex={0} className="dropdown-content z-40 p-3 shadow bg-base-100  w-36">
              {navItems}
            </ul>
          </div>


        </div>
        <div className="hidden md:block bg-[#e1e7ec] ">
          <div className="navbar-center ">
            <ul className="menu items-center menu-horizontal md:px-1 gap-[3px] md:gap-2  ">
              {navItems}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#002147]  text-white flex gap-1 justify-center items-center ">

        <button className="px-3 rounded-md py-4 text-[18px] font-bold ">Update</button>
        <Marquee>
          <p>
            <a href="https://www.sohopathi.com/alokjhari-high-school/" >আলোকঝাড়ি উচ্চ বিদ্যালয়</a>একটি শিক্ষা প্রতিষ্ঠান যা জয়গঞ্জ জয়গঞ্জ খানসামা <a href="https://www.sohopathi.com/district/dinajpur/" >দিনাজপুরে অবস্থিত।</a>.
            এর এডুকেশনাল ইনস্টিটিউট আইডেন্টিফিকেশন নম্বর বা EIIN, হল<a href="https://www.sohopathi.com/eiin/120614/" >120614</a>.
            01 জানুয়ারী, 1962 সালে, এটি প্রথম চালু করা হয়েছিল।
            আলোকঝাড়ি উচ্চ বিদ্যালয়ের বিকল্প নাম  <a href="https://www.sohopathi.com/alokjhari-high-school/" >Alokjhari High School </a>  আলোকঝাড়ী উচ্চ বিদ্যালয় |
            এটি একটি সম্মিলিত ধরণের সহ-শিক্ষামূলক প্রোগ্রাম।
            প্রতিষ্ঠানটি নিম্নলিখিত ক্ষেত্রে শিক্ষা প্রদান করে: <a href="https://www.sohopathi.com/discipline/science/" >বিজ্ঞান</a>, <a href="https://www.sohopathi.com/discipline/business-studies/" > ব্যবসায় অধ্যয়ন</a>, <a href="https://www.sohopathi.com/discipline/humanities/" >মানবিক   </a> ।</p>
        </Marquee>

      </div>

    </>
  );
};

export default Navbar;
