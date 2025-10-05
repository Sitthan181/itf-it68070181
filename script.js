const myinput = document.getElementById("myinput");
let current_value = 0;

const accountInput = document.getElementById("account_bal");
const cashInput = document.getElementById("cash_bal");
const changeBtn = document.getElementById("changeBtn");
const logBox = document.getElementById("log");

function log(message) {
    logBox.value = message + "\n" + logBox.value;
}

changeBtn.addEventListener("click", () => {
    log(`Current account balance: ${accountInput.value}, Current cash balance: ${cashInput.value}`);
});

function proceed() {
    const op = document.getElementById("operation").value;
    let amt = parseInt(document.getElementById("amount").value);
    let accVal = parseInt(accountInput.value);
    let cashVal = parseInt(cashInput.value);

    if (op === "deposit") {
        if (amt <= cashVal) {
            accVal += amt;
            cashVal -= amt;
            accountInput.value = accVal;
            cashInput.value = cashVal;
            log(`Current account balance: ${accVal}, Current cash balance: ${cashVal}`);
        } else {
            log("Couldn't deposit entered balance. (Insufficient cash balance)");
        }
    } else if (op === "withdraw") {
        if (amt <= accVal) {
            accVal -= amt;
            cashVal += amt;
            accountInput.value = accVal;
            cashInput.value = cashVal;
            log(`Current account balance: ${accVal}, Current cash balance: ${cashVal}`);
        } else {
            log("Couldn't withdraw entered balance. (Insufficient account balance)");
        }
    }
}