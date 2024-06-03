import {Route, Routes} from "react-router-dom";
import "./App.css";
import Course from "./Pages/Course";
import Home from "./Pages/Home";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Course/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>

    </>
  );
}

export default App;
