import express from "express";
import { loginUser, createAccount } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/register", createAccount);
userRouter.post("/signin", loginUser);

export default userRouter;

// old routes
// import express from "express";
// import {
//   deleteUser,
//   test,
//   updateUser,
//   getUserListings,
//   getUser,
// } from "../controllers/user.controller.js";
// import { verifyToken } from "../utils/verifyUser.js";

// const router = express.Router();

// router.get("/test", test);
// router.post("/update/:id", verifyToken, updateUser);
// router.delete("/delete/:id", verifyToken, deleteUser);
// router.get("/listings/:id", verifyToken, getUserListings);
// router.get("/:id", verifyToken, getUser);

// export default router;
