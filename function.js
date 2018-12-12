function calculate() {
    let first = document.getElementById('first').value;
    let second = document.getElementById('second').value;
    let third = document.getElementById('third');
    let operation = third.options[third.selectedIndex].value;
    let answerField = document.getElementById('result');


    if (Number(first) && Number(second)) {
        let request = new XMLHttpRequest();
        let obj = { first: first, second: second, operation: operation };
        let jsonFile = JSON.stringify(obj);
        request.open('POST', 'http://localhost:3000/');
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(jsonFile);
        request.onreadystatechange = () => {
            if (request.readyState == 4 && request.status == 200) {
                let jsonObject = JSON.parse(request.responseText);
                answerField.textContent = jsonObject.result;
            }
        };
    } else {
        answerField.textContent = 'Error: bad input';
    }
}