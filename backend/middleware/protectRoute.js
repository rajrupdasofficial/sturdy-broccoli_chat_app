import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ error: "Unauthorized token not provided" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) {
      return res.status(401).json({ error: "Invalid token" });
    }
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      res.stats(404).json({ error: "user not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    res
      .status(500)
      .json({ error: `Internal server error occured ${error.message}` });
  }
};
export default protectRoute;
