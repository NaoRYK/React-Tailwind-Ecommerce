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
import CheckoutSide from "../../Components/CheckoutSide/CheckoutSide";

function App() {
  return (
    <ShoppingCartProvider>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/clothes" element={<Home></Home>}></Route>
          <Route path="/electronics" element={<Home></Home>}></Route>
          <Route path="/shoes" element={<Home></Home>}></Route>
          <Route path="/furnitures" element={<Home></Home>}></Route>
          <Route path="/others" element={<Home></Home>}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/account" element={<MyAcc />}></Route>
          <Route path="/myorder" element={<MyOrder />}></Route>
          <Route path="/myorder/last" element={<MyOrder />}></Route>
          <Route path="/myorder/:id" element={<MyOrder />}></Route>
          <Route path="/orders" element={<MyOrders />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
        <CheckoutSide></CheckoutSide>
      </Router>
    </ShoppingCartProvider>
  );
}

export default App;
