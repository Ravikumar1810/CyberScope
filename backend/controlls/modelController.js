const dataset = require("../data/databreach.json");
const { exec } = require("child_process");

const modelController = async (req, res) => {
  try {
    const email = req.query.email;

    if (!email) {
      return res.status(400).json({ msg: "Email is required" });
    }

    const record = dataset.find(item => item.email === email);
    if (!record) {
      return res.status(404).json({ msg: "Email not found" });
    }

    const breach_count = record.breaches.length;
    const source_count = new Set(record.breaches.map(b => b.source)).size;
    const is_gmail = email.includes("@gmail.com") ? 1 : 0;
    const email_length = email.length;

    const command = `python ./ml-model/predict_email_risk.py ${breach_count} ${source_count} ${is_gmail} ${email_length}`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ msg: "Prediction error", error });
      }

      const result = JSON.parse(stdout);

      res.status(200).json({
        email,
        breach_count,
        source_count,
        is_gmail,
        email_length,
        risk_score: result.risk
      });
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = { modelController };
