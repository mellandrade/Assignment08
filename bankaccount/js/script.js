/*eslint-env browser*/

function myName() {
    "use strict";
    var name = window.prompt("What is your name?");
    window.document.getElementById("myname").innerHTML = (name);
}
var initialBalance = 100;
function getBalance() {
    "use strict";
    window.document.getElementById("balance").innerHTML = (initialBalance);
}
function myDeposit() {
    "use strict";
    var deposit = parseFloat(window.prompt("Enter the amount you'd like to deposit."));
    if (isNaN(deposit) || deposit === "") {
        window.alert("Error. Please enter a number.");
        myDeposit();
    } else {
        initialBalance += deposit;
        getBalance();
    }
}
function myWithdraw() {
    "use strict";
    var withdraw = parseFloat(window.prompt("Enter the amount you'd like to withdraw."));
    if (isNaN(withdraw) || withdraw === "") {
        window.alert("Error. Please enter a number.");
        myWithdraw();
    } else {
        initialBalance -= withdraw;
        getBalance();
    }
    
}