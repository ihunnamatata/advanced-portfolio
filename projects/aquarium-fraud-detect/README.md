# Fraud Detection at an Aquarium Gift Shop

This project analyzes gift shop transactions to detect potentially fraudulent behavior using card type, purchase amount, location, and time of day.

### Dataset

- `aquarium_gift_fraud.csv` — 1,000 simulated transactions:
  - Card Type, Purchase Amount, Customer Age
  - Time of Day, Location, Item Category
  - Target: `Fraud` (1 = fraud, 0 = not fraud)

### Highlights

- Fraud risk by time, location, and card type
- Random forest classifier
- Feature importance chart

### Tools Used

- Python (pandas, seaborn, sklearn)
- Model: Random Forest
- Visuals: boxplot, heatmap, bar chart
