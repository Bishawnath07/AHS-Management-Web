import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import AutoCounter from "./Components/AutoCounter/AutoCounter";
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
      <MissionVission></MissionVission>
      {/* <div className="md:w-[25%] w-[60%] mx-auto ">
          <Carts></Carts>
          <ImportantLinks></ImportantLinks>
        </div> */}

    </div>


  );
}

export default App;
