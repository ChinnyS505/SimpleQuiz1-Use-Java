let count=0 //เอาไว้นับคะแแนนที่กดแล้วถูกต้อง

function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'a') {
        result.textContent = " Correct! Bangkok Bank";
        result.style.color = 'green';
        count=1; //count ต้องเท่ากับ 1 ถ้าตอบถูกเพราะจะได้เรื่มนับจาก 1
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
 }
 function checkAnswer2(answer) {
    const result = document.getElementById('result2');
    const result3 = document.getElementById('result3');
    if (answer === 'a') {
        result.textContent = " Correct! Arctic Monkeys";
        result.style.color = 'green';
        count++; //count = count +1
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
    result3.textContent="คุณได้คะแนน ="+count+" คะแนน"
 }
count=0 //เพื่อให้ทำเสร็จแล้ว รีใหม่ = 0 เมื่อทำใหม่
