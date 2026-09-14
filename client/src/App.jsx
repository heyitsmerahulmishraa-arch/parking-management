import {Routes,Route} from "react-router"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Notification from "./components/Notification"

const App = () => {
  return (
    <>
    <Notification/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </>
  )
}

export default App