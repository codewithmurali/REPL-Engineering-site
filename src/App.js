import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home.page";

function App() {
  return (
   <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
   </>
  );
}

export default App;
