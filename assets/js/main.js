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

    const numberOfCells = 2
    for (let i = 0; i < numberOfCells; i++) {
        const cell = newRow.insertCell(i);

        const textarea = document.createElement("textarea");
        textarea.placeholder = "Table data"
        textarea.maxLength = 20

        cell.appendChild(textarea)
    }
}
// Creates color input for each paragraph
const paragraph = document.getElementsByTagName("p")
const numberOfPara = paragraph.length
for (let i = 0; i < numberOfPara; i++) {
    const input = document.createElement("input")
    input.type = "color", input.value = "#D3D3D3", input.autocomplete = "off", input.class = "center", input.id = "colorPicker" + i.toString()

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