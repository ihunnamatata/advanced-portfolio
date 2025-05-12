# Forecasting Monthly Ticket Sales at a Fantasy Stadium

This project models ticket demand over time for a magical stadium hosting fantasy events. It uses time series forecasting to project future attendance using weather, promotions, and seasonal patterns.

### Dataset

- `fantasy_stadium_sales.csv` — 48 months of ticket data:
  - Events, weather rating, promotion level
  - Monthly sales totals
  - Target: `TicketsSold`

### Highlights

- Seasonality, trend, and noise decomposition
- Forecasting with ARIMA
- Event type and promotion effects

### Tools Used

- Python (pandas, seaborn, matplotlib, statsmodels)
- Model: ARIMA (AutoRegressive Integrated Moving Average)
- Visuals: time series line plots, decompositions, forecasts
