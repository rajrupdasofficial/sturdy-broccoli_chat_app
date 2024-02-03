import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connection.js";

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();
app.use(express.json());
app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server is running on port ${PORT}`);
});
