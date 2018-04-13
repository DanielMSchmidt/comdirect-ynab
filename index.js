const ynab = require("ynab");
const accessToken = process.env.ACCESS_TOKEN;
const budgetName = process.env.BUDGET;

if (!accessToken) {
  throw "Please provide an access token as ACCESS_TOKEN";
}

if (!budgetName) {
  throw "Please provide a budget to add the transactions to. You can do this as BUDGET.";
}

const ynabAPI = new ynab.api(accessToken);

(async function() {
  try {
    const budgetsResponse = await ynabAPI.budgets.getBudgets();
    const budgets = budgetsResponse.data.budgets;
    const selectedBudget = budgets.find(x => x.name === budgetName);

    if (!selectedBudget) {
        throw `Budget with name '${budgetName}' not found`;
    }

    // TODO: gather transactions from CSV
    // TODO: add each transaction with ynab API
  } catch(e) {
    console.error(e);
  }
})();
