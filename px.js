function verify() {
    var num = parseFloat(prompt("Enter a number:"));

if (num > 0) {
console.log("положительное");
}
else if (num < 0) {
console.log("отрицательное");
}
else {
console.log("ноль");
}
    
    }
    document.getElementById("result").value = result;


function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}


const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)
