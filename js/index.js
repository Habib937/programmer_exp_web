let calculateBtn = document.getElementById('calculate');
calculateBtn.addEventListener('click', function(){
let income = document.getElementById('income').value;
let incomeNum=parseFloat(income);
let software = document.getElementById('software').value;
let softwareNum =parseFloat(software);
let curses = document.getElementById('courses').value;
let cursesNum=parseFloat(curses);
let internet = document.getElementById('internet').value;
let internetNum=parseFloat(internet);


let totalExpence = softwareNum+ cursesNum + internetNum;
let balance = incomeNum - totalExpence

let totalExpencesvalue = document.getElementById('total-expenses').innerText = totalExpence.toFixed(2);

let balancevalue = document.getElementById('balance').innerText = balance.toFixed(2);

let result = document.getElementById('results').classList.remove('hidden')

})


let calculateSavingBtn = document.getElementById('calculate-savings');
    calculateSavingBtn.addEventListener('click', function(){
let savingInputField = parseFloat(document.getElementById('savings').value);
let income = document.getElementById('income').value;
let incomeNum=parseFloat(income);
let software = document.getElementById('software').value;
let softwareNum =parseFloat(software);
let curses = document.getElementById('courses').value;
let cursesNum=parseFloat(curses);
let internet = document.getElementById('internet').value;
let internetNum=parseFloat(internet);

let totalExpence = softwareNum+ cursesNum + internetNum;
let balance = incomeNum - totalExpence

let savingAmount = (balance*savingInputField)/100;
let remainingBalance = balance - savingAmount;
let savingAmountValue = document.getElementById('savings-amount').innerText = savingAmount.toFixed(2);

let remainingBalanceAmount = document.getElementById('remaining-balance').innerText = remainingBalance.toFixed(2);
    }) 




let historyTab = document.getElementById('history-tab');
let assistantTab = document.getElementById('assistant-tab');
historyTab.addEventListener('click', function(){

        historyTab.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');

        historyTab.classList.remove('text-gray-600')
        assistantTab.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
        assistantTab.classList.remove('text-gray-600')

        document.getElementById('expense-form').classList.add('hidden')
    })