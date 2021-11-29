var Form = document.getElementById("form");
var Totalbalance = 0;

Form.addEventListener("submit",function(e) {
    e.preventDefault();
    Addtransaction();
    Amount.value = ""
})

function Addtransaction() {
    var Transactiontable = document.getElementById("Transaction");
    var Row = Transactiontable.insertRow(-1);
    var Cell1 = Row.insertCell(0);
    var Cell2 = Row.insertCell(1);
    var Cell3 = Row.insertCell(2);
    var Cell4 = Row.insertCell(3);
    var DeleteButton = document.createElement("button");
    var Type = document.getElementById("Type").value;
    var Amount = document.getElementById("Amount").value;

    if (Amount <= 0){
        alert("You can not deposit or withdraw less than 1 bath");
        return
    }
    else if (Type == "ถอน" && Amount > Totalbalance){
        alert("Insufficient balance");
        return
    }
    else if (Type == "ถอน"){
        Totalbalance = Totalbalance - parseInt(document.getElementById("Amount").value);
    }
    else if (Type == "ฝาก"){
        Totalbalance = Totalbalance + parseInt(document.getElementById("Amount").value);
    }
    else {
        alert("something went wrong! please try again");
    }

    Cell1.innerHTML = Type;
    Cell2.innerHTML = Amount;
    Cell3.innerHTML = Totalbalance;
    Cell4.appendChild(DeleteButton);
    DeleteButton.innerHTML = "ลบ";
    DeleteButton.onclick = function() {DeleteRow(this)};
}

function DeleteRow(index) {
    var Rowindex = index.parentNode.parentNode.rowIndex;
    document.getElementById("Transaction").deleteRow(Rowindex);
  }
