import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <HashRouter>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {/* <Route path="/sign-up" element={<SignUp />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route> */}
      </Routes>
    </HashRouter>
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
