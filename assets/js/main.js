function alertFunction() {
    alert("THIS IS AN ALERT WEE WOO WEE WOO !!!!!!!")
    }
function confirmFunction() {
    confirm("yes or no")
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