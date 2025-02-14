// import { FaUser } from "react-icons/fa6";
import SocialsFooter from "./socialsFooter";
import { Link } from "react-router-dom";
import "./register.css";
import BackButton from "./backButton";
function Register() {
  return (
    <section className="registerSection">
      <BackButton />
      <div className="registerContainer">
        <h1 className="header">
          Create your <br />
          <span>Account</span>
        </h1>
        <form action="">
          {/* <FaUser/> */}
          <input type="text" name="" id="input" placeholder="Mr Cane" />
          <input type="email" name="" id="input" />
          <input type="password" name="" id="input" />
          <input type="submit" value="Register" className="registerButton" />
          <div className="signupLink">
            Already Have An Account? <Link>Sign In</Link>
          </div>
        </form>
        <SocialsFooter />
      </div>
    </section>
  );
}
export default Register;
