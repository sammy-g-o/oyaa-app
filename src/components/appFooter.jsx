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
          <NavLink>
          <RiHome5Fill />
          </NavLink>
        </li>
        <li>
          <NavLink>
          <PiCirclesFourThin />
          </NavLink>
        </li>
        <li>
          <NavLink>
          <PiClockThin />
          </NavLink>
        </li>
        <li>
          <NavLink>
          <LuCircleUserRound />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default AppFooter;
