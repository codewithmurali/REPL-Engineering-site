import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home_page";
import { Footer } from "./components/footer";
import { Profile } from "./pages/profile_page";
import { TopContainer } from "./components/navbar/desktop";

function App() {
  return (
    <>
      <Navbar />
      <TopContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
