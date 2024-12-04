// import MyAlert from "./components/Alert";
import MyAvatar from "./components/Avatar";
import MyBadge from "./components/Badge";
import MyCard from "./components/Card";
import MyCollapse from "./components/Collapse";
import MyImage from "./components/Image";
import MyMessage from "./components/Message";
import MyPopOver from "./components/PopOver";
import MyResult from "./components/Result";
// import MyCalendar from "./components/Calendar";
import MySelect from "./components/Select";
import MySwitch from "./components/Switch";
import MyTabs from "./components/Tabs";
import MyTooltip from "./components/Tooltip";
import MyTour from "./components/Tour";

const App = () => {
  return(
  <>
    <MyPopOver/>
    <MyAvatar/>
    <MyBadge/>
    <MySelect/>
    <MySwitch/>
    {/* <MyCalendar/> */}
    <MyCard/>
    <MyCollapse/>
    <MyImage/>
    <MyTabs/>
    <MyTour/>
    <MyMessage/>
    <MyResult/>
    <MyTooltip/>
    {/* <MyAlert/>  notwrorkin idk why */}
  </> 
  )
};

export default App;