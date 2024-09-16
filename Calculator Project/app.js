console.log('This is Calculator App In JavaScript');
let inputScreen = document.getElementById('inputScreen');
buttons = document.querySelectorAll('button');
let screenValue = '';
let temporaryscreenValue = '';
let count = 0;
let count2 = 0;
// Remainder
// Answer

for (button of buttons) {
    button.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        // console.log(buttonText);
        if (buttonText == '\u00D7') {
            buttonText = '*';
            screenValue += buttonText;
            inputScreen.value = screenValue;
        }
        else if (buttonText == '\u00F7') {
            buttonText = '/';
            screenValue += buttonText;
            inputScreen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = '';
            inputScreen.value = screenValue;
        }
        else if (buttonText == '\u003D') {
            inputScreen.value = eval(screenValue);
            screenValue = '';
        }
        else if (buttonText == '\u2190') {
            screenValue = inputScreen.value.substring(0, inputScreen.value.length - 1);
            inputScreen.value = screenValue;
        }
        else if (buttonText == '\u221A') {
            screenValue = Math.sqrt(screenValue);
            inputScreen.value = screenValue;
        }
        else if (buttonText == '\u005E') {
            let base = Number(screenValue);
            // console.log(base);
            let power;
            // console.log(screenValue);
            screenValue += '\u005E';
            inputScreen.value = screenValue;
            temporaryscreenValue = screenValue;
            for (item of buttons) {
                item.addEventListener('click', (e) => {
                    itemText = e.target.innerText;
                    regex = /[0-9]/;
                    if (regex.test(itemText)) {
                        power = Number(itemText);
                        // console.log(power);
                        temporaryscreenValue += itemText;
                        inputScreen.value = temporaryscreenValue;
                        count = 1;
                        console.log('Count is ', count);
                    }
                })
                if (count == 1) {
                    console.log('count1');
                    break;
                }
            }
            for (key of buttons) {
                key.addEventListener('click', (e) => {
                    keyText = e.target.innerText;
                    regex = /=/;
                    if (regex.test(keyText)) {
                        screenValue = Math.pow(base, power);
                        console.log(screenValue);
                        inputScreen.value = screenValue;
                        count2 = 1;
                        screenValue = '';
                        temporaryscreenValue = '';
                        base = 0;
                        power = 0;
                    }
                })
                if (count2 == 1) {
                    console.log('count2');
                    break;
                }
            }
        }
        else if (buttonText == '\u00D710\u207F') {
            screenValue = Math.pow(10, screenValue);
            inputScreen.value = screenValue;
            // screenValue += '*10';
            // for (item of buttons) {
            //     item.addEventListener('click', (e) => {
            //         itemText = e.target.innerText;
            //         regex = /[0-9]/;
            //         if (regex.test(itemText)) {
            //             console.log('superscript');
            //             screenValue += itemText.sup();
            //         }
            //     })
            // }
            // inputScreen.value = screenValue;
        }
        else {
            screenValue += buttonText;
            inputScreen.value = screenValue;
        }
    })
}