import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import AutoCounter from "./Components/AutoCounter/AutoCounter";
import ManagingCommite from "./Components/ManagingCommittee/ManagingCommite";
import MissionVission from "./Components/MissionVission/MissionVission";
import NoticeBoard from "./Components/NoticeBoard/NoticeBoard";
import Statistics from "./Components/Statistics/Statistics";
import Gallery from "./Pages/Gallery/Gallery";
// import Gallery from "./Pages/Gallery/Gallery";

function App() {
  return (
    <div className="max-w-7xl mx-auto">

      <NoticeBoard></NoticeBoard>
      <AutoCounter></AutoCounter>
      <Statistics></Statistics>
      <AboutUs></AboutUs>
      <Gallery></Gallery>
      <ManagingCommite></ManagingCommite>
      <MissionVission></MissionVission>

    </div>


  );
}

export default App;
