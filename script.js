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
const containerTransactions = document.querySelector(".all_transactions");

const createUsernames = function (acts, num) {
  acts.forEach(function (acc, i, end = "...") {
    let firstSpace = acc.owner.slice(0, num - end.length).indexOf(" ");
    acc.username = acc.owner
      .toLowerCase()
      .slice(0, firstSpace > 0 ? firstSpace : num - end.length + 1);
  });
};
createUsernames(accounts, 10);

const getAllTransactions = function (acts) {
  acts.forEach(function (acc) {
    acc.allTrans = Object.entries(acc).filter((val, i, arr) => {
      return arr[i][0].includes("transaction");
    });
  });
};
getAllTransactions(accounts);

console.log(account1.allTrans);

const displayAccountTransactions = function (act) {
  containerTransactions.innerHTML = " ";
  act.allTrans.forEach(function (val, i, acc) {
    let trans = acc[i].find(function (val, i, ac) {
      return typeof ac[i] === "object";
    });

    let details = trans.details;
    console.log(details);
    let amt = trans.amount;
    console.log(amt);
    let type = amt > 0 ? "income" : "expense";
    console.log(type);
    let status = type === "income" ? "complete" : "Incomplete";
    console.log(status);

    const html = `    <div class="all_transactions">
  <tr id="all_transactions--row1" class="all_transactions--row2">
    <td class="all_transactions_type">${type}</td>
    <td class="all_transactions--details">${details}</td>
    <td class="all_transactions--amount">${amt}</td>
    <td class="all_transactions--status">Pending</td>
    <td class="all_transactions--date">25/04/2024</td>
    <td class="all_transactions--actions">...</td>
  </tr>
</div>
  `;
  });
};
displayAccountTransactions(account1);

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

/* <div class="all_transactions">
  <tr id="all_transactions--row1" class="all_transactions--row2">
    <td class="all_transactions_type">Expense</td>
    <td class="all_transactions--details">Fuel Payment</td>
    <td class="all_transactions--amount">$60</td>
    <td class="all_transactions--status">Pending</td>
    <td class="all_transactions--date">25/04/2024</td>
    <td class="all_transactions--actions">...</td>
  </tr>
</div>; */
