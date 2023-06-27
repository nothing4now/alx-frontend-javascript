export default function getBudgetObject(incomes, gdps, capital) {
  const budget = {
    income: incomes,
    gdp: gdps,
    capita: capital,
  };

  return budget;
}
