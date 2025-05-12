# Market Basket & Ingredient Analysis for a Health Store

This project analyzes product co-purchases and ingredient similarity in a natural health store. It uses association rules to identify product bundles and clusters items with overlapping ingredients.

### Dataset

- `health_store_transactions.csv` — 400 transactions:
  - Products grouped by TransactionID
  - Ingredient breakdown per product

### Highlights

- Association rules via Apriori (product pairs)
- Cosine similarity heatmap of ingredient overlap
- Bundle-ready insights for health-focused shops

### Tools Used

- Python (pandas, mlxtend, sklearn)
- Visuals: heatmaps, association rule tables
