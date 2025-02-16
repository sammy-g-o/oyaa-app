import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/welcomePage";
import RegisterPage from "./pages/registerPage";
import WelcomeHomePage from "./pages/welcomeHomePage";
import ProfilePage from "./pages/profile";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<WelcomeHomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
