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
import NewArrivals from "./Pages/NewArrivals";
import Shop from "./Pages/Shop";
import ContactPage from "./Pages/ContactPage";
import FooterComponent from "./Components/FooterComponent";
import Collections from "./Pages/Collections";
import AdminOnlyRoute from "./Components/AdminOnlyRoute";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/the-brand" element={<TheBrand />} />
        <Route path="/collection" element={<Collections />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/search" element={<Search />} />
        <Route path="/listing/:listingId" element={<Listing />} />
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
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
