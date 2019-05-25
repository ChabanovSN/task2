var step;

function init() {
     step = prompt("Исходное положение:");

    if (step != null && step.length == 2) {
        var x = step[0].charCodeAt(); //letter "65": "A","66": "B", "67": "C", "68": "D","69": "E", "70": "F",  "71": "G", "72": "H"
        var y = Number.parseInt(step[1]); // number 1-8
        if ((isNaN(x) || isNaN(y)) || (x < 65 || y < 1) || (x > 72 || y > 8)) {
            alert("Некорректные значениe");
            return;
        }

        var steps = [
            [x + 2, y + 1],
            [x + 2, y - 1],
            [x + 1, y + 2],
            [x - 1, y + 2],
            [x + 1, y - 2],
            [x - 1, y - 2],
            [x - 2, y - 1],
            [x - 2, y + 1]
        ];

        var result = 'Возможные варианты хода:\n\n\n';
        for (var i = 0; i < steps.length; i++) {
            if (steps[i][0] > 64 && steps[i][0] < 73 && steps[i][1] > 0 && steps[i][1] < 9) 	// проверка на граница шахматной доски 
            {
                result = `${result} ${String.fromCharCode(steps[i][0])}${steps[i][1]}`;
            }

        }
        alert(result);
    }
    else{
        alert("Некорректные значениe");
    }
}
function loop() {
    while (step !=='q') {
        init();
        }
}
loop();



