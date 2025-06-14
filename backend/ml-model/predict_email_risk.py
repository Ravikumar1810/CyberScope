import sys
import json
import joblib
import pandas as pd
import os

# Get the path to the directory where this script is located
script_dir = os.path.dirname(__file__)
model_path = os.path.join(script_dir, "model.pkl")

# Load the model
model = joblib.load(model_path)

# Read input arguments
# Usage example: python predict_email_risk.py 5 2 1 15
args = sys.argv[1:]

breach_count = int(args[0])
source_count = int(args[1])
is_gmail = int(args[2])
email_length = int(args[3])

# Create DataFrame
df = pd.DataFrame([{
    "breach_count": breach_count,
    "source_count": source_count,
    "is_gmail": is_gmail,
    "email_length": email_length
}])

#  Predict risk
prediction = model.predict(df)[0]

#  Print output as JSON
print(json.dumps({"risk": int(prediction)}))
