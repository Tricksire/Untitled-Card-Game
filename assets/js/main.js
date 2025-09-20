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
    cell1.innerHTML = "test";
    cell2.innerHTML = "test";
}
// Creates color input for each paragraph
const paragraph = document.getElementsByTagName("p")
const numberOfPara = paragraph.length
for (let i = 0; i < numberOfPara; i++) {
    const input = document.createElement("input")
    input.type = "color"
    input.autocomplete = "off"
    input.value = "#D3D3D3"
    input.id = "colorPicker" + i.toString()

    paragraph[i].insertAdjacentElement("afterend", input);
}

// Sets the paragraph text color based on the input

document.getElementById('colorPicker0').addEventListener('input', function () {
    document.getElementById('text0').style.color = this.value;
})

document.getElementById('colorPicker1').addEventListener('input', function () {
    document.getElementById('text1').style.color = this.value;
})

document.getElementById('colorPicker2').addEventListener('input', function () {
    document.getElementById('text2').style.color = this.value;
})