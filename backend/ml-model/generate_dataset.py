import pandas as pd
import random

def generate_dataset(num_samples=500):
    data = []

    for _ in range(num_samples):
        breach_count = random.randint(0, 10)
        source_count = random.randint(0, breach_count)  # source count ≤ breach count
        is_gmail = random.randint(0, 1)
        email_length = random.randint(10, 25)

        # Define a simple logic to assign risk (can be more complex in real life)
        risk = 1 if breach_count > 3 or source_count > 2 else 0

        data.append({
            "breach_count": breach_count,
            "source_count": source_count,
            "is_gmail": is_gmail,
            "email_length": email_length,
            "risk": risk
        })

    df = pd.DataFrame(data)
    df.to_csv("updated_dataset.csv", index=False)
    print("Dataset generated and saved as 'updated_dataset.csv'")

# Run it
if __name__ == "__main__":
    generate_dataset(500)
