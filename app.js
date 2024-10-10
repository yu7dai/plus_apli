// 足し算関数
function calculateSum() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const sum = num1 + num2;
    document.getElementById("result").textContent = sum;
}

// 掛け算関数
function calculateProduct() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const product = num1 * num2;
    document.getElementById("result").textContent = product;
}
