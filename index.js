const ynab = require("ynab");
const accessToken = process.env.ACCESS_TOKEN;

if (!accessToken) {
  throw "Please provide an access token as ACCESS_TOKEN";
}

const ynabAPI = new ynab.api(accessToken);

(async function() {
  try {
    const budgetsResponse = await ynabAPI.budgets.getBudgets();
    const budgets = budgetsResponse.data.budgets;
    for (let budget of budgets) {
      console.log(`Budget Name: ${budget.name}`);
    }
  } catch(e) {
    console.error(e);
  }
})();
