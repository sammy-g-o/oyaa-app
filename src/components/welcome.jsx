import SocialsFooter from "./socialsFooter";
import Logo from "./logo";
import "./welcome.module.css";
import { Link } from "react-router-dom";
function Welcome() {
  return (
    <>
      <section
        style={{
          backgroundColor: "#F7F8FA",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          gap: "20px",
        }}
      >
        ``
        <Logo />
        <h1
          style={{
            fontFamily: "Urbanist",
            fontSize: "40px",
            fontWeight: "700",
            lineHeight: "64px",
            textAlign: "center",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Welcome to
          <br />
          <span>Oyaa</span>
        </h1>
        <Link
          to=""
          style={{
            width: "349px",
            height: "61px",
            border: "none",
            borderRadius: "50px",
            backgroundColor: "#141718",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
            color: "#FFFFFF",
          }}
        >
          Log In
        </Link>
        <Link
          to="/register"
          style={{
            width: "349px",
            height: "61px",
            border: "none",
            borderRadius: "50px",
            color: "#B1B1B1",
            backgroundColor: "#E3E3E3",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          Sign up
        </Link>
        <SocialsFooter />
      </section>
    </>
  );
}
export default Welcome;
