import { FaAngleLeft } from "react-icons/fa6";
function BackButton() {
  return (
    <div
      style={{
        position: "absolute",
        top: "45px",
        left: "35px",
        width: "45px",
        height: "45px",
        border: "2.37px",
        background: "#FFFFFFAB",
        boxShadow: "5.92px 11.84px 23.68px 0px #D3D1D84D",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "15px",
      }}
    >
      <FaAngleLeft />
    </div>
  );
}
export default BackButton;
