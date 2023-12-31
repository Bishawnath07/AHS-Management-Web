import "./App.css";
import AutoCounter from "./Components/AutoCounter/AutoCounter";
import Carts from "./Components/Carts";
import ImportantLinks from "./Components/ImportantLinks/ImportantLinks";
import MissionVission from "./Components/MissionVission/MissionVission";
import NoticeBoard from "./Components/NoticeBoard/NoticeBoard";
import Statistics from "./Components/Statistics/Statistics";
// import Gallery from "./Pages/Gallery/Gallery";

function App() {
  return (
    <div className="max-w-7xl mx-auto">

      <div className="md:flex md:gap-10">
        <div className="md:w-[70%] mx-5 md:mx-0 ">
          <NoticeBoard></NoticeBoard>
          <AutoCounter></AutoCounter>
          <Statistics></Statistics>
          <MissionVission></MissionVission>
        </div>
        <div className="md:w-[25%] w-[60%] mx-auto ">
          <Carts></Carts>
          <ImportantLinks></ImportantLinks>
        </div>

      </div>
      {/* <CollegeCard></CollegeCard> */}
      {/* <Gallery></Gallery> */}


    </div>
  );
}

export default App;
