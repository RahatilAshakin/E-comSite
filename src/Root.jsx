import { Outlet } from "react-router-dom";
import NavBarA from "./Components/NavBar-1/NavBarA";
import NAvbarB from "./Components/NavBarB/NAvbarB";
import Home from "./Components/Pages/Home/Home";
import TopBAr from "./Components/TopBar/TopBAr";

export default function Root() {
  return (
    <>
      <div className="bg-gray-200">
        <TopBAr></TopBAr>
         <NavBarA></NavBarA>
        <div className="max-w-screen-xl mx-auto">
         
          <NAvbarB></NAvbarB>
        </div>
        {/* <Home></Home> */}
        <Outlet></Outlet>
      </div>
    </>
  );
}
