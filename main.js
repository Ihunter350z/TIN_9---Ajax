let express = require('express');
let app = express();
let bodyParser = require('body-parser');


app.use(bodyParser.json());
app.listen(3000);

function calculate(first, second, op) {
    switch (op) {
        case '+':
            return first + second;
        case '-':
            return first - second;
        case '*':
            return first * second;
        case '/':
            return first / second;
        default:
            break;

    }
}

app.post('/', (req, res) => {
    let result = calculate(Number(req.body.first), Number(req.body.second), req.body.operation);
    res.send(JSON.stringify({ result: result }));
});

