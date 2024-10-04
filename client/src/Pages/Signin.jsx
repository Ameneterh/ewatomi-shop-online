import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import OAuth from "../Components/OAuth";
import Spinner from "../Components/Spinner";

export default function SignIn() {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="min-h-[80vh] flex flex-col items-center w-[90%] sm:max-w-sm mx-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl prata-regular ">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {currentState === "Sign In" ? (
        ""
      ) : (
        <input
          type="text"
          className="w-full pax-3 border border-gray-300 rounded-md active:shadow-md hover:bg-slate-50"
          placeholder="Name"
          required
        />
      )}

      <input
        type="email"
        className="w-full pax-3 border border-gray-300 rounded-md active:shadow-md hover:bg-slate-50"
        placeholder="Email"
        required
      />
      <input
        type="password"
        className="w-full pax-3 border border-gray-300 rounded-md active:shadow-md hover:bg-slate-50"
        placeholder="Password"
        required
      />

      <div className="w-full flex justify-between text-sm mt-[-6px] text-blue-500">
        <p className="cursor-pointer hover:underline underline-offset-1">
          Forgot your password?
        </p>
        {currentState === "Sign In" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer hover:underline underline-offset-1"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Sign In")}
            className="cursor-pointer hover:underline underline-offset-1"
          >
            Signin Here
          </p>
        )}
      </div>
      <button className="flex justify-center items-center bg-slate-700 px-8 py-3 text-sm font-medium text-white hover:bg-slate-500 active:bg-blue-600 rounded-md w-full uppercase">
        {loading ? (
          <>
            <Spinner
              height={5}
              width={5}
              border_width={4}
              border_color={"white"}
            />{" "}
            processing ...
          </>
        ) : (
          <>{currentState === "Sign In" ? "Login" : "create account"}</>
        )}
      </button>
    </form>
  );
}

// export default function SignIn() {
//   const [formData, setFormData] = useState({});
//   const { loading, error } = useSelector((state) => state.user);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       dispatch(signInStart());
//       const res = await fetch("/api/auth/signin", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();

//       if (data.success === false) {
//         dispatch(signInFailure(data.message));
//         return;
//       }
//       dispatch(signInSuccess(data));
//       navigate("/");
//     } catch (error) {
//       dispatch(signInFailure(error.message));
//     }
//   };

//   return (
//     <div className="p-3 max-w-lg mx-auto">
//       <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <input
//           type="text"
//           placeholder="username"
//           className="border p-3 rounded-lg"
//           id="username"
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           placeholder="password"
//           className="border p-3 rounded-lg"
//           id="password"
//           onChange={handleChange}
//         />
//         <button
//           disabled={loading}
//           className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:80"
//         >
//           {loading ? "Loading ..." : "Sign In"}
//         </button>
//         {/* <OAuth /> */}
//       </form>
//       <div className="flex gap-2 mt-5">
//         <p>Need an account?</p>
//         <Link to={"mailto:ewatomiuniquebeautyplace@gmail.com"}>
//           <span className="text-blue-700">Contact Admin</span>
//         </Link>
//       </div>
//       {error && <p className="text-red-500 mt-5">{error}</p>}
//     </div>
//   );
// }
