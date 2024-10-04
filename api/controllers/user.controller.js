import User from "../models/user.models.js";
import validator from "validator";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const createToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET);
};

// Route for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User does not exist!" });
    }

    const isMatched = await bcryptjs.compare(password, user.password);

    if (isMatched) {
      const token = createToken(user._id);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials!" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Route for user registration
const createAccount = async (req, res) => {
  try {
    const { fullname, username, email, password } = req.body;

    // check if user already exist
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.json({ success: false, message: "User already exists!" });
    }

    // check validity of email and password strength
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please, enter valid email!",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please, enter a strong password!",
      });
    }

    // hash password
    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = new User({
      fullname,
      username,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { loginUser, createAccount };

// import bcryptjs from "bcryptjs";
// import User from "../models/user.models.js";
// import { errorHandler } from "../utils/error.js";
// import Listing from "../models/listing.models.js";

// export const test = (req, res) => {
//   res.json({
//     message: "Hello Test API from Controller Routes!",
//   });
// };

// export const updateUser = async (req, res, next) => {
//   if (req.user.id !== req.params.id)
//     return next(errorHandler(401, "You can only update your own account!"));
//   try {
//     if (req.body.password) {
//       req.body.password = bcryptjs.hashSync(req.body.password, 10);
//     }
//     const updatedUser = await User.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: {
//           username: req.body.username,
//           email: req.body.email,
//           password: req.body.password,
//           avatar: req.body.avatar,
//         },
//       },
//       { new: true }
//     );
//     const { password, ...rest } = updatedUser._doc;
//     res.status(200).json(rest);
//   } catch (error) {
//     next(error);
//   }
// };

// export const deleteUser = async (req, res, next) => {
//   if (req.user.id !== req.params.id)
//     return next(errorHandler(401, "You can only delete your own account!"));
//   try {
//     await User.findOneAndDelete(req.params.id);
//     res.clearCookie("access_token");
//     res.status(200).json("User deleted successfully");
//   } catch (error) {
//     next(error);
//   }
// };

// export const signout = async (req, res, next) => {
//   try {
//     res.clearCookie("access_token");
//     res.status(200).json("You have been logged out!");
//   } catch (error) {
//     next(error);
//   }
// };

// export const getUserListings = async (req, res, next) => {
//   if (req.user.id === req.params.id) {
//     try {
//       const listings = await Listing.find({ userRef: req.params.id });
//       res.status(200).json(listings);
//     } catch (error) {
//       next(error);
//     }
//   } else {
//     return next(errorHandler(401, "You can only view your own listings!"));
//   }
// };

// export const getUser = async (req, res, next) => {
//   try {
//     const user = await User.findById(req.params.id);

//     if (!user) return next(errorHandler(404, "User not found!"));
//     const { password: pass, ...rest } = user._doc;
//     res.status(200).json(rest);
//   } catch (error) {
//     next(error);
//   }
// };
