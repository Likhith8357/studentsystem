import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Log";
import Home from "./components/Home/Hom";

function app(){
  return <><h1>Welcome</h1><BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>

     
    </Routes>
  </BrowserRouter></>
}
export default app;