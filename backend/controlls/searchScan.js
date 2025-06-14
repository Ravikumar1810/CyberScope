const data = require("../data/databreach.json");

const searchScan = async (req, res) => {
  try {
    const {email} = req.query; // or req.body.email 
    
    // If email is not provided, return an error:
    if (!email) {
      return res.status(400).json({ msg: "Email is required" });
    }

    // data is an array, so use Array.find:
    const dataset = data.find(item => item.email === email);
   
    // If no dataset is found, return a 404 error:

    if (!dataset) {
      return res.status(404).json({ msg: "Email not found in dataset" });
    }

    // If found, send it back:
    return res.status(200).json({
      msg: "Email found",
      data: dataset
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
};

module.exports = { searchScan };