function calculateSum() {
    // 入力値を取得
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    
    // 足し算を実行
    const sum = num1 + num2;
    
    // 結果を表示
    document.getElementById("result").textContent = sum;
}
