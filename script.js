// function to get input values
function getInputValuesById(inputId){
    const inputField = document.getElementById(inputId);
    const inputString = inputField.value;
    const inputValue = parseFloat(inputString);
    return inputValue;
}
// function to get text values
function getInnerTextById(textId){
    const textField = document.getElementById(textId);
    const textString = textField.innerText;
    const textValue = parseFloat(textString);
    return textValue;
}
// calculate button
document.getElementById('calculate-button').addEventListener('click', function(){
    const incomeAmount = getInputValuesById('income-field');
    const foodCost = getInputValuesById('food');
    const rentCost = getInputValuesById('rent');
    const clothesCost = getInputValuesById('clothes');
    const totalCost = foodCost + rentCost + clothesCost;
    document.getElementById('total-expense').innerText = totalCost;
    const balanceLeftAfterAllTotalCost = incomeAmount - totalCost;
    document.getElementById('remaining-balance').innerText = balanceLeftAfterAllTotalCost;
})
// save button
document.getElementById('save-button').addEventListener('click', function(){
    const savingPercentage = getInputValuesById('saving-percentage');
    const incomeAmount = getInputValuesById('income-field');
    const multiplicationOfTotalandPercent = incomeAmount * savingPercentage;
    const SavingsAmount = multiplicationOfTotalandPercent / 100;
    document.getElementById('saving-amount').innerText = SavingsAmount;
    const remainingBalance = getInnerTextById('remaining-balance');
    const savingAmount = getInnerTextById('saving-amount');
    const balanceLeftAfterSavings = remainingBalance - savingAmount;
    document.getElementById('remaining-balance-saving').innerText = balanceLeftAfterSavings;
})