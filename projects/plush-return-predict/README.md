# Product Return Prediction for Plush Toy Vendors

This project predicts whether plush toy orders are likely to be returned using purchase and product metadata. It explores the impact of toy theme, price, delivery time, and customer complaints.

### Dataset

- `plush_returns.csv` — 1,000 simulated plush toy orders:
  - Theme, Color, Payment Method
  - Units Ordered, Delivery Time, Price
  - Target: `Returned` (1 = returned, 0 = kept)

### Highlights

- Return risk by toy design and pricing
- Random Forest classifier
- Feature importance breakdown

### Tools Used

- Python (pandas, seaborn, scikit-learn)
- Visuals: price distributions, return rate by theme
- Model: Random Forest
