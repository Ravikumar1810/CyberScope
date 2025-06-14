import sys
import json
import joblib
import pandas as pd

# Load model
model = joblib.load("model.pkl")

# Read input arguments from command line
# Example: python predict_email_risk.py 5 2 1 15
args = sys.argv[1:]

breach_count = int(args[0])
source_count = int(args[1])
is_gmail = int(args[2])
email_length = int(args[3])

# Create dataframe
df = pd.DataFrame([{
    "breach_count": breach_count,
    "source_count": source_count,
    "is_gmail": is_gmail,
    "email_length": email_length
}])

# Predict
prediction = model.predict(df)[0]

# Output
print(json.dumps({"risk": int(prediction)}))
