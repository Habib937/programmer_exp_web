
let count = 0;
let calculateBtn = document.getElementById('calculate');
calculateBtn.addEventListener('click', function(){
    count++


// let income = document.getElementById('income').value;
// let incomeNum=parseFloat(income);
// let software = document.getElementById('software').value;
// let softwareNum =parseFloat(software);
// let curses = document.getElementById('courses').value;
// let cursesNum=parseFloat(curses);
// let internet = document.getElementById('internet').value;
// let internetNum=parseFloat(internet);

let incomeNum = getInputValueId('income')
let softwareNum = getInputValueId('software')
let cursesNum = getInputValueId('courses')
let internetNum = getInputValueId('internet')

if(incomeNum<=0 || isNaN(incomeNum)){
    // document.getElementById('income-error').classList.remove('hidden');
    showError("income-error");
    return
}
if(softwareNum<=0 || isNaN(softwareNum)){
    // document.getElementById('software-error').classList.remove('hidden');
    showError('software-error')
    return
}
if(cursesNum<=0 || isNaN(cursesNum)){
    // document.getElementById('courses-error').classList.remove('hidden');
    showError('courses-error')
    return
}
if(internetNum<=0 || isNaN(internetNum)){
    // document.getElementById('internet-error').classList.remove('hidden');
    showError('internet-error')
    return
}


let totalExpence = softwareNum+ cursesNum + internetNum;
let balance = incomeNum - totalExpence


if(totalExpence > income){
    // document.getElementById('logic-error').classList.remove('hidden')
    showError('logic-error')
    return
}

let totalExpencesvalue = document.getElementById('total-expenses').innerText = totalExpence.toFixed(2);

let balancevalue = document.getElementById('balance').innerText = balance.toFixed(2);

// let result = document.getElementById('results').classList.remove('hidden')
showError('results')

let historyItem = document.createElement('div');
historyItem.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500';

historyItem.innerHTML=`
                <p class = "text-xs text-gray-500">${new Date().toDateString()}</p>
                <p class = "text-xs text-gray-500">Income: $${getToFixed(incomeNum)}</p>
                <p class = "text-xs text-gray-500">totalExpence: $${getToFixed(totalExpence)}</p>
                <p class = "text-xs text-gray-500">balance: $${getToFixed(balance)}</p>
`

let historyAdd = document.getElementById('history-list');
    historyAdd.insertBefore(historyItem, historyAdd.firstChild);

})


let calculateSavingBtn = document.getElementById('calculate-savings');
    calculateSavingBtn.addEventListener('click', function(){


let savingInputField = getInputValueId("savings")


// parseFloat(document.getElementById('savings').value);
// let income = document.getElementById('income').value;
// let incomeNum=parseFloat(income);
// let software = document.getElementById('software').value;
// let softwareNum =parseFloat(software);
// let curses = document.getElementById('courses').value;
// let cursesNum=parseFloat(curses);
// let internet = document.getElementById('internet').value;
// let internetNum=parseFloat(internet);

let incomeNum = getInputValueId('income')
let softwareNum = getInputValueId('software')
let cursesNum = getInputValueId('courses')
let internetNum = getInputValueId('internet')



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

        // document.getElementById('expense-form').classList.add('hidden')
        // document.getElementById('history-section').classList.remove('hidden')
        showAdd('expense-form')
        showError('history-section')
    })

    assistantTab.addEventListener('click', function(){

        assistantTab.classList.add(
            'text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600'
        )
        historyTab.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
        // document.getElementById('expense-form').classList.remove('hidden')
        showAdd('history-section')
        showError('expense-form')
        // document.getElementById('history-section').classList.add('hidden')


    })

    document.getElementById('income').addEventListener('input', function(){
        let inputValue = parseFloat(document.getElementById('income').value)

        if(inputValue <=0 || isNaN(inputValue)){
            // document.getElementById('income-error').classList.remove('hidden');

            showError('income-error')
    return
        }
    })