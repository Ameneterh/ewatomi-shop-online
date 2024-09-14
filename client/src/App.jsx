import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from "./Components/HeaderComponent";
import Home from "./Pages/Home";
import SignUp from "./Pages/Signup";
import SignIn from "./Pages/Signin";
import PrivateRoute from "./Components/PrivateRoute";
import Profile from "./Pages/Profile";
import CreateListing from "./Pages/CreateListing";
import UpdateListing from "./Pages/UpdateListing";
import Listing from "./Pages/Listing";
import Search from "./Pages/Search";
import TheBrand from "./Pages/TheBrand";
import ContactPage from "./Pages/ContactPage";
import FooterComponent from "./Components/FooterComponent";
import Collections from "./Pages/Collections";
import AdminOnlyRoute from "./Components/AdminOnlyRoute";
import Dashboard from "./Pages/Dashboard";
import Cart from "./Pages/Cart";
import PlaceOrder from "./Pages/PlaceOrder";
import Orders from "./Pages/Orders";
import SearchBar from "./Components/SearchBar";
import NotFound from "./Pages/NotFound";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <ToastContainer />
      <ScrollToTop />
      <HeaderComponent />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/the-brand" element={<TheBrand />} />
        <Route path="/collection" element={<Collections />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/search" element={<Search />} />
        <Route path="/listing/:listingId" element={<Listing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<AdminOnlyRoute />}>
          <Route path="/create-listing" element={<CreateListing />} />
          <Route
            path="/update-listing/:listingId"
            element={<UpdateListing />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
