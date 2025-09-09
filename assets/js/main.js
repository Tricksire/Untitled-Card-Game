function alertFunction() {
    alert("THIS IS AN ALERT WEE WOO WEE WOO !!!!!!!")
    }
function confirmFunction() {
    confirm("yes or no")
    }
function outputFunction() {
    alert(document.getElementById('textInput').value)
}

function newRow() {
    const table = document.getElementById("table").
    getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(1);
    cell1.innerHTML = "test";
    cell2.innerHTML = "test";
    cell3.innerHTML = "test";
}

document.getElementById('colorPicker1').addEventListener('input', function() {
    document.getElementById('text1').style.color = this.value;
     })

document.getElementById('colorPicker2').addEventListener('input', function() {
    document.getElementById('text2').style.color = this.value;
    })

document.getElementById('colorPicker3').addEventListener('input', function() {
    document.getElementById('text3').style.color = this.value;
    })