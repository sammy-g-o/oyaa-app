import AppFooter from "./appFooter";
import { Link } from "react-router-dom";
import { FaFaceSmileBeam } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";
import "./welcomeHome.css";
import BackButton from "./backButton";
function WelcomeHome() {
  return (
    <section className="wrapper">
      <BackButton/>
      <div className="content">
        <div className="links">
          <Link>
            <FaFaceSmileBeam /> Fun Rooms
          </Link>
          <Link>
            <FaUsers /> Friends
          </Link>
          <Link>
            <FaFireFlameCurved />
            Trending
          </Link>
        </div>
        <div className="diamond2"></div>
        <div className="diamond"></div>
      </div>
      <AppFooter />
    </section>
  );
}
export default WelcomeHome;
