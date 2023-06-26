function unhide_results(){
    if (document.getElementById('monthly_input').value.length > 2) {
        document.getElementById('div_results').style.visibility = 'visible';
        initialMath();
    } else {
        document.getElementById('div_results').style.visibility = 'hidden';
    }
}
function unhide_detailed(){
    document.getElementById('div_detailed').style.visibility = 'visible';
    detailedMath();
}

function initialMath (){
    var total = document.getElementById('monthly_input').value;
    var expense = (total * 0.5).toFixed(2);
    var spending = (total * 0.3).toFixed(2);
    var savings = (total * 0.2).toFixed(2);

    document.getElementById('total_value').innerHTML = ("Total Budget: $ " + total);
    document.getElementById('expenses_value').innerHTML = ("Expenses: $ " + expense);
    document.getElementById('spending_value').innerHTML = ("Spending: $ " + spending);
    document.getElementById('savings_value').innerHTML = ("Savings: $ " + savings);

    document.getElementById('calculate_button').disabled = true;
}

function detailedMath (){
    var rentmorg = parseInt(document.getElementById('rent_input').value);
    var billAmount = parseInt(document.getElementById('bills_input').value);
    var totalAmount = document.getElementById('monthly_input').value;

    var expenseAmount = (totalAmount * 0.5)
    var expenseUsed = (rentmorg + billAmount)
    var remaining = (expenseAmount - expenseUsed).toFixed(2);

    document.getElementById('rent_value').innerHTML = ("Rent / Mortgage: $ " + rentmorg);
    document.getElementById('bills_value').innerHTML = ("Bills: $ " + billAmount);
    document.getElementById('left_value').innerHTML = ("Left over for expenses: $ " + remaining);

    document.getElementById('detailed_button').disabled = true;
}

function reset_form(){
    location.reload();
}