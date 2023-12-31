import './Links.css'
import img from './image/dengu.jpg'
import img2 from './image/National-Helpline.jpg'
const ImportantLinks = () => {
    return (
        <div>
            <div className="sidebarComn">
                <div id="block-44" className="block block-internal_e_services">
                    <h3>Internal eServices</h3>
                    <div className="block-body">
                        <ul className="menu"><li><a href="https://www.mygov.bd/public/serviceByOffice?agent=np&amp;domain=techedu.gov.bd" id="link-171" className="hrmis"><span>HRMIS</span></a></li><li><a href="https://www.mygov.bd/public/serviceByOffice?agent=np&amp;domain=techedu.gov.bd" id="link-172" className="daily-schedule-dg"><span>Daily Schedule (DG)</span></a></li><li><a href="https://www.mygov.bd/public/serviceByOffice?agent=np&amp;domain=techedu.gov.bd" id="link-173" className="meeting-schedule-director-admin"><span>Meeting Schedule (Director (Admin))</span></a></li><li><a href="https://www.mygov.bd/public/serviceByOffice?agent=np&amp;domain=techedu.gov.bd" id="link-174" className="acr-engcolltttcpoly"><span>ACR (Eng.Coll.+TTTC+Poly.)</span></a></li><li><a href="https://www.mygov.bd/public/serviceByOffice?agent=np&amp;domain=techedu.gov.bd" id="link-175"><span>ডোমেইন মেইল</span></a></li><li><a href="https://www.mygov.bd/public/serviceByOffice?agent=np&amp;domain=techedu.gov.bd" id="link-176" className="online-transfer-application"><span> Online Transfer Application</span></a></li></ul>	</div>
                </div><div id="block-45" className="block block-all">
                    <h3></h3><h3 >All</h3>
                    <div className="block-body">
                        <ul className="menu"><li><a href="#" id="link-177"><span>কেন্দ্রীয় ই-সেবা</span></a></li><li><a href="http://www.bmet.gov.bd/BMET/onlinaVisaCheckAction" id="link-178"><span>প্রয়োজনীয় এপস</span></a></li><li><a href="http://www.bmet.gov.bd/BMET/onlinaVisaCheckAction" id="link-179"><span>ভিসা যাচাই</span></a></li><li><a href="http://www.nothi.gov.bd/users/login" id="link-180"><span>নথি</span></a></li><li><a href="http://www.cga.gov.bd/index.php?option=com_wrapper" id="link-181"><span>অনলাইন চালান যাচাইকরণ</span></a></li><li><a href="http://www.dip.gov.bd/site/page/f2d015a9-1132-4426-8eef-147f1c4bac8a" id="link-182"><span>অনলাইনে পাসপোর্টের আবেদন</span></a></li></ul>

                    </div>

                </div>
                <div className='block my-5'>
                    <h3>  ডেঙ্গু প্রতিরোধে করণীয়</h3>
                    <img src={img} alt="" />
                </div>
                <div className='block'>
                    <h3>    জরুরি হটলাইন</h3>
                    <img src={img2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ImportantLinks;