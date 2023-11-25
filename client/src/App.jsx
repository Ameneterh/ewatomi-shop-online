import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
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

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/the-brand" element={<TheBrand />} />
        {/* <Route path="/contact-us" element={<ContactUs />} /> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/search" element={<Search />} />
        <Route path="/listing/:listingId" element={<Listing />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route
            path="/update-listing/:listingId"
            element={<UpdateListing />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import Home from "./pages/home";
// import Signin from "./pages/signin";
// import SignOut from "./pages/Signup";
// import SignUp from "./pages/Signup";
// import About from "./pages/about";
// import Profile from "./pages/profile";
// import Header from "./components/Header";
// import PrivateRoute from "./components/PrivateRoute";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/sign-in/" element={<Signin />} />
//         <Route path="/sign-up" element={<SignUp />} />
//         <Route path="/about" element={<About />} />
//         <Route element={<PrivateRoute />}>
//           <Route path="/profile" element={<Profile />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }
