import Logo from "../components/logo";
function Loading1() {
  const container = {
    width: "100%",
    height: "100vh",
  };
  const main = {
    width: "100%",
    height: "93%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const logo = {
    width: "100px",
    height: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
  };
  const foot = {
    width: "100%",
    height: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
  };
  return (
    <>
      <div style={container}>
        <div style={main}>
          <div style={logo}>
            <Logo />
          </div>
          <div style={foot}>
            <div>
              <div
                style={{
                  fontWeight: "500",
                  fontSize: "45px",
                  fontFamily: "Poppins",
                }}
              >
                Oyaa
              </div>
              <div style={{ fontWeight: "700", opacity: "0.6" }}>
                Version1.6
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Loading1;
