import { Outlet } from "react-router-dom";
import "./App.css";

import MenuTitle from "./Components/MenuTitle/MenuTitle";
import NavBarA from "./Components/NavBar-1/NavBarA";
import NAvbarB from "./Components/NavBarB/NAvbarB";
import TopBAr from "./Components/TopBar/TopBAr";
import NewArrivals from "./Components/Pages/NewArrivals/NewArrivals";
import Home from "./Components/Pages/Home/Home";
import AllProducts from "./Components/Pages/AllProducts/AllProducts";

function App() {
  return (
    <div className="max-w-full mx-auto">
      {/* Top Bars */}
      {/* <TopBAr />
      <NavBarA />
      <NAvbarB />
      <MenuTitle /> */}

      {/* Page Content */}
      {/* <div className="max-w-full px-[50px] md:px-[100px] mx-auto"> */}
        {/* <Outlet /> 
        <Home></Home>
        <AllProducts></AllProducts> */}
      </div>
    // </div>
  );
}

export default App;


// https://i.ibb.co/NBp3qGk/1.jpg
// https://i.ibb.co/SDftRtd2/2.jpg
// https://i.ibb.co/BVKxkBPc/3.jpg
// https://i.ibb.co/spMZXjhp/4.jpg
// https://i.ibb.co/svwPpKf7/5.jpg
// https://i.ibb.co/20kfd3zR/7.jpg
