import { PiCirclesFourThin } from "react-icons/pi";
import { RiHome5Fill } from "react-icons/ri";
import { PiClockThin } from "react-icons/pi";
import { LuCircleUserRound } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import "./appFooter.css";
function AppFooter() {
  return (
    <div className="footer">
      <ul>
        <li>
          <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>
            <RiHome5Fill />
            
          </NavLink>
        </li>
        <li>
          <NavLink to="/chats" className={({ isActive }) => (isActive ? "active" : "")}>
            <PiCirclesFourThin />
          </NavLink>
        </li>
        <li>
          <NavLink to="/notifications" className={({ isActive }) => (isActive ? "active" : "")}>
            <PiClockThin />
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>
            <LuCircleUserRound />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default AppFooter;
