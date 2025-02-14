function SocialsFooter() {
  return (
    <footer style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <span style={{ color: "#ACADB9", textAlign: "center" }}>
        continue with accounts
      </span>
      <div>
        <button
          style={{
            width: "165px",
            height: "57px",
            top: "779px",
            left: "35px",
            gap: "0px",
            borderRadius: "10px",
            opacity: "0px",
            color: "#D44638",
            backgroundColor: "#D4463840",
            marginRight: "10px",
            border: "none",
          }}
        >
          GOOGLE
        </button>
        <button
          style={{
            width: "165px",
            height: "57px",
            top: "779px",
            left: "35px",
            gap: "0px",
            borderRadius: "10px",
            opacity: "0px",
            color: "#4267B2",
            backgroundColor: "#4267B240",
            border: "none",
          }}
        >
          FACEBOOK
        </button>
      </div>
    </footer>
  );
}
export default SocialsFooter;
