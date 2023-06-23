import SignIn from "../Sigin/SignIn";
import Home from "../Home/Home";
import MyAcc from "../MyAccount/MyAcc";
import MyOrder from "../MyOrder/MyOrder";
import MyOrders from "../MyOrders/MyOrders";
import NotFound from "../NotFound/NotFound";
import Navbar from "../../Components/Navbar/Navbar";
import { ShoppingCartProvider } from "../../Context/Context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <ShoppingCartProvider>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/account" element={<MyAcc />}></Route>
          <Route path="/myorder" element={<MyOrder />}></Route>
          <Route path="/orders" element={<MyOrders />}></Route>
          <Route path="/not_found" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </ShoppingCartProvider>
  );
}

export default App;
