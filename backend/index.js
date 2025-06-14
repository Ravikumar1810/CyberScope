const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv").config({ path: path.resolve(__dirname, ".env") });
const PORT = process.env.PORT || 3000;
const searchScan = require("./routes/routes");
const predict = require("./routes/modelControlles");
const  cors  = require("cors");





app.use(express.json());

//cors
app.use(cors({
  origin: "http://localhost:5173", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true 
}));

// routes
app.use('/', searchScan);
app.use('/', predict);
app.get("/", (req, res) => {
    res.status(200).json({ msg: "welcome to home page" });
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});


