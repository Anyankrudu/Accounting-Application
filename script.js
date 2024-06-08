"use script";

const account1 = {
  owner: "Davis Sampson",
  pin: 2222,
  transaction1: {
    details: "Fuel",
    amount: -60,
  },
  transaction2: {
    details: "sale",
    amount: 300,
  },
  transaction3: {
    details: "Maintainance",
    amount: -60,
  },
  transaction4: {
    details: "sale",
    amount: 650,
  },
  transaction5: {
    details: "CarWash",
    amount: -60,
  },
};

const account2 = {
  owner: "Sari Wilson",
  pin: 3333,
  transaction1: {
    details: "sale",
    amount: 690,
  },
  transaction2: {
    details: "Laundry",
    amount: -250,
  },
  transaction3: {
    details: "sale",
    amount: 26000,
  },
  transaction4: {
    details: "Cleaning",
    amount: -650,
  },
  transaction5: {
    details: "sale",
    amount: 16000,
  },
};

const accounts = [account1, account2];

const btnSignin = document.querySelector(".btn_signin");
const inputSigninPin = document.querySelector(".form_input--pin");
const inputSigninUsername = document.querySelector(".form_input--user");
const containerTransactions = document.querySelector("tbody");

const createUsernames = function (acts, num) {
  acts.forEach(function (act, i, end = "...") {
    let firstSpace = act.owner.slice(0, num - end.length).indexOf(" ");
    act.username = act.owner
      .toLowerCase()
      .slice(0, firstSpace > 0 ? firstSpace : num - end.length + 1);
  });
};
createUsernames(accounts, 10);

const getAllTransactions = function (acts) {
  acts.forEach(function (act) {
    act.allTrans = Object.entries(act).filter((tran, i, acc) => {
      return acc[i][0].includes("transaction");
    });
  });
};
getAllTransactions(accounts);

const displayAccountTransactions = function (act) {
  containerTransactions.innerHTML = " ";

  act.allTrans.forEach(function (tran, i, acc) {
    let trans = acc[i].find(function (val, i, acc) {
      return typeof acc[i] === "object";
    });

    let details = trans.details;
    let amt = trans.amount;
    let type = amt > 0 ? "Income" : "Expense";
    let status = type === "Income" ? "Completed" : "Incomplete";

    const html = `    
   <tr id="all_transactions" class="all_transactions--row">
    <td class="all_transactions_type">${type}</td>
    <td class="all_transactions--details">${details}</td>
    <td class="all_transactions--amount">${amt}</td>
    <td class="all_transactions--status">${status}</td>
    <td class="all_transactions--date">${25042024}</td>
    <td class="all_transactions--actions">${"menu"}</td>
  </tr>

  `;

    containerTransactions.insertAdjacentHTML("afterbegin", html);
  });
};
displayAccountTransactions(account2);

let currentAccount;

btnSignin.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputSigninUsername.value
  );

  if (currentAccount?.pin === Number(inputSigninPin.value)) {
    // Display UI and message
  }
});
