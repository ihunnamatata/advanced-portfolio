# Customer Lifetime Value in Theme Park Loyalty Programs

This project estimates customer lifetime value (CLV) using spending behavior, loyalty tier, visit frequency, and referral activity.

### Dataset

- `themepark_clv.csv` — 800 customer records:
  - Membership level, region, visit type
  - Average spend, visits/year, years enrolled
  - Referral usage
  - Target: `CustomerLifetimeValue` (calculated metric)

### Highlights

- CLV comparison by membership and referral
- Visit frequency vs. lifetime value
- Regression modeling with RMSE output

### Tools Used

- Python (pandas, seaborn, scikit-learn)
- Visuals: Boxplots, scatterplots, correlation matrix
