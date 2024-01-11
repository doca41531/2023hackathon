
// import Head from "./pages/head/Head"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/main"
import Wla from "./pages/Wla"
import My from "./pages/my"
import Order from "./pages/order"
import Login from "./pages/Login"
import Sign from "./pages/sgin"
import Memu from "./pages/memu"

function App() {

  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/Wla" element={<Wla/>}></Route>
            <Route path="/order" element={<Order/>}></Route>
            <Route path="/my" element={<My/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/Sign" element={< Sign />}></Route> 
            <Route path="/memu" element={< Memu />}></Route>
          </Routes>
    </BrowserRouter>
  )

}

export default App
