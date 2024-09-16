console.log('KeyBoard Project');
let inputBox = document.getElementById('inputBox');
let Esc = document.getElementById('Esc');
let F1 = document.getElementById('F1');
let F2 = document.getElementById('F2');
let F3 = document.getElementById('F3');
let F4 = document.getElementById('F4');
let F5 = document.getElementById('F5');
let F6 = document.getElementById('F6');
let F7 = document.getElementById('F7');
let F8 = document.getElementById('F8');
let F9 = document.getElementById('F9');
let F10 = document.getElementById('F10');
let F11 = document.getElementById('F11');
let F12 = document.getElementById('F12');
let com = document.getElementById('com');
let Del = document.getElementById('Del');
let Tab = document.getElementById('Tab');
let BigCurlyBracLeft = document.getElementById('BigCurlyBracLeft');
let BigCurlyBracRight = document.getElementById('BigCurlyBracRight');
let BackSlashLine = document.getElementById('BackSlashLine');
let BackSpace = document.getElementById('BackSpace');
let CapsLock = document.getElementById('CapsLock');
let SemiandColon = document.getElementById('SemiandColon');
let SingleDoubleQuote = document.getElementById('SingleDoubleQuote');
let Fn1 = document.getElementById('Fn1');
let Fn2 = document.getElementById('Fn2');
let Enter = document.getElementById('Enter');
let Shift1 = document.getElementById('Shift1');
let Shift2 = document.getElementById('Shift2');
let LesserThanComma = document.getElementById('LesserThanComma');
let GreaterThanDot = document.getElementById('GreaterThanDot');
let QuestionMarkSlash = document.getElementById('QuestionMarkSlash');
let Control1 = document.getElementById('Control1');
let Control2 = document.getElementById('Control2');
let Alt1 = document.getElementById('Alt1');
let Alt2 = document.getElementById('Alt2');
let Win1 = document.getElementById('Win1');
let Win2 = document.getElementById('Win2');
let Up = document.getElementById('Up');
let Down = document.getElementById('Down');
let Left = document.getElementById('Left');
let Right = document.getElementById('Right');
let SpaceBar = document.getElementById('SpaceBar');
// let = document.getElementById('');
let alphabetBtn = document.getElementsByClassName('alphabetBtn');
let alphabetArray = Array.from(alphabetBtn);
let numBtn = document.getElementsByClassName('numBtn');
let numArray = Array.from(numBtn);
let chars = [];
let Shift12onoff = false, CapsLockonoff = false, numValue;
let controlvalue;
// BigCurlyBracLeftValue, BigCurlyBracRightValue, BackSlashLineValue, SemiandColonValue, SingleDoubleQuoteValue, LesserThanCommaValue, GreaterThanDotValue, QuestionMarkSlashValue, 
// let KeyCodesArray = [{ 'Esc': [27, 192] }, { 'F1': [49, 112] }, { 'F2': [50, 113] }, { 'F3': [51, 114] }, { 'F4': [52, 115] }, { 'F5': [53, 116] }, { 'F6': [54, 117] }, { 'F7': [55, 118] }, { 'F8': [56, 119] }, { 'F9': [57, 120] }, { 'F10': [48, 121] }, { 'F11': [189, 122] }, { 'F12': [187, 123] }, { 'Del': [46] }, { 'Tab': [9] }, { 'Q': [81] }, { 'W': [87] }, { 'E': [69] }, { 'R': [82] }, { 'T': [84] }, { 'Y': [89] }, { 'U': [85] }, { 'I': [73] }, { 'O': [79] }, { 'P': [80] }, { 'BigCurlyBracLeft': [219] }, { 'BigCurlyBracRight': [221] }, { 'BackSlashLine': [220] }, { 'BackSpace': [8] }, { 'CapsLock': [20] }, { 'A': [65] }, { 'S': [83] }, { 'D': [68] }, { 'F': [70] }, { 'G': [71] }, { 'H': [72] }, { 'J': [74] }, , { 'K': [75] }, { 'L': [76] }, { 'SemiandColon': [186] }, { 'SingleDoubleQuote': [222] }, { 'Enter': [13] }, { 'Shift1': [16, 'ShiftLeft'] }, { 'Z': [90] }, { 'X': [88] }, { 'C': [67] }, { 'V': [86] }, { 'B': [66] }, { 'N': [78] }, { 'M': [77] }, { 'LesserThanComma': [188] }, { 'GreaterThanDot': [190] }, { 'QuestionMarkSLash': [191] }, { 'Up': [33, 38] }, { 'Shift2': [16, 'ShiftRight'] }, { 'Control1': [17, 'ControlLeft'] }, { 'Win1': [91] }, { 'Alt1': [18, 'AltLeft'] }, { 'SpaceBar': [32] }, { 'Alt2': [18, 'AltRight'] }, { 'Win2': [91] }, { 'Left': [36, 37] }, { 'Down': [34, 40] }, { 'Right': [35, 39] }, { 'Control2': [17, 'ControlRight'] }]

function AutoTurnOffShift() {
    Shift12onoff = false;
    Shift1.classList.remove('activeBtn');
    Shift2.classList.remove('activeBtn');
    if (CapsLockonoff) {
        alphabetArray.forEach(aBtn => {
            aBtn.classList.add('upperCase');
        });
    }
    else {
        alphabetArray.forEach(aBtn => {
            aBtn.classList.remove('upperCase');
        });

    }
};
function keyplayAudio() {
    const audioElement = new Audio('Audio/Keyboard-Button-Click.mp3');
    audioElement.play();
}

window.addEventListener('keydown', KeyBoardLogicKeyDown);
window.addEventListener('keyup', KeyBoardLogicKeyUp);
inputBox.addEventListener('click', (e) => {
    window.removeEventListener('keydown', KeyBoardLogicKeyDown);
    window.removeEventListener('keyup', KeyBoardLogicKeyUp);
    setTimeout(() => {
        window.addEventListener('keydown', KeyBoardLogicKeyUp);
        window.addEventListener('keyup', KeyBoardLogicKeyUp);
    }, 100);
})

function KeyBoardLogicKeyDown(event) {
    event.preventDefault;
    console.log(event.code);
    switch (event.code) {
        case "Escape":
            Esc.classList.toggle("keyboardpressedActivity");

            break;
        case "Backquote":
            Esc.classList.toggle("keyboardpressedActivity");
            if (Shift12onoff) {
                chars.push('~');
                inputBox.value = chars.join('');
            } else {
                chars.push('`');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "F1":
            F1.classList.toggle("keyboardpressedActivity");
            break;
        case "Digit1":
            F1.classList.toggle("keyboardpressedActivity");
            if (Shift12onoff) {
                chars.push('!');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('1');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "F2":
            F2.classList.toggle("keyboardpressedActivity");
            break;
        case "Digit2":
            F2.classList.toggle("keyboardpressedActivity");
            if (Shift12onoff) {
                chars.push('@');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('2');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "F3":
            F3.classList.toggle("keyboardpressedActivity");
            break;
        case "Digit3":
            F3.classList.toggle("keyboardpressedActivity");
            if (Shift12onoff) {
                chars.push('#');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('3');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "F4":
            F4.classList.toggle("keyboardpressedActivity");
            break;
        case "Digit4":
            F4.classList.toggle("keyboardpressedActivity");
            if (Shift12onoff) {
                chars.push('$');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('4');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "F5":
            F5.classList.toggle("keyboardpressedActivity");
            break;
        case "Digit5":
            F5.classList.toggle("keyboardpressedActivity");
            if (Shift12onoff) {
                chars.push('%');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('5');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "F6":
            F6.classList.toggle("keyboardpressedActivity");
            break;
        case "Digit6":
            F6.classList.toggle("keyboardpressedActivity");
            if (Shift12onoff) {
                chars.push('^');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('6');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "F7":
            F7.classList.toggle("keyboardpressedActivity");
            break;
        case "Digit7":
            F7.classList.toggle("keyboardpressedActivity");
            if (Shift12onoff) {
                chars.push('&');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('7');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "F8":
            F8.classList.toggle("keyboardpressedActivity");
            break;
        case "Digit8":
            F8.classList.toggle("keyboardpressedActivity");
            if (Shift12onoff) {
                chars.push('*');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('8');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "F9":
            F9.classList.toggle("keyboardpressedActivity");
            break;
        case "Digit9":
            F9.classList.toggle("keyboardpressedActivity");
            if (Shift12onoff) {
                chars.push('(');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('9');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "F10":
            F10.classList.toggle("keyboardpressedActivity");
            break;
        case "Digit0":
            F10.classList.toggle("keyboardpressedActivity");
            if (Shift12onoff) {
                chars.push(')');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('0');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "F11":
            F11.classList.toggle("keyboardpressedActivity");
            break;
        case "Minus":
            F11.classList.toggle("keyboardpressedActivity");
            if (Shift12onoff) {
                chars.push('_');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('-');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "F12":
            F12.classList.toggle("keyboardpressedActivity");
            break;
        case "Equal":
            F12.classList.toggle("keyboardpressedActivity");
            if (Shift12onoff) {
                chars.push('+');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('=');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "Delete":
            Del.classList.toggle("keyboardpressedActivity");
            let spaceValue = chars.lastIndexOf(' ');
            let poppedValue = (chars.length - spaceValue);
            for (let i = 0; i < poppedValue; i++) {
                chars.pop();
            };
            inputBox.value = chars.join('');
            AutoTurnOffShift();
            break;
        case "Tab":
            Tab.classList.toggle("keyboardpressedActivity");
            chars.push(' ');
            chars.push(' ');
            chars.push(' ');
            chars.push(' ');
            chars.push(' ');
            inputBox.value = chars.join('');
            AutoTurnOffShift();
            break;
        case "KeyQ":
            Q.classList.toggle("keyboardpressedActivity");
            if (CapsLockonoff && Shift12onoff) {
                chars.push('q');
                inputBox.value = chars.join('');
            }
            else if (CapsLockonoff || Shift12onoff) {
                chars.push('Q');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('q');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "KeyW":
            W.classList.toggle("keyboardpressedActivity");
            if (CapsLockonoff && Shift12onoff) {
                chars.push('w');
                inputBox.value = chars.join('');
            }
            else if (CapsLockonoff || Shift12onoff) {
                chars.push('W');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('w');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "KeyE":
            E.classList.toggle("keyboardpressedActivity");
            if (CapsLockonoff && Shift12onoff) {
                chars.push('e');
                inputBox.value = chars.join('');
            }
            else if (CapsLockonoff || Shift12onoff) {
                chars.push('E');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('e');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "KeyR":
            R.classList.toggle("keyboardpressedActivity");
            if (CapsLockonoff && Shift12onoff) {
                chars.push('r');
                inputBox.value = chars.join('');
            }
            else if (CapsLockonoff || Shift12onoff) {
                chars.push('R');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('r');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "KeyT":
            T.classList.toggle("keyboardpressedActivity");
            if (CapsLockonoff && Shift12onoff) {
                chars.push('t');
                inputBox.value = chars.join('');
            }
            else if (CapsLockonoff || Shift12onoff) {
                chars.push('T');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('t');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "KeyY":
            Y.classList.toggle("keyboardpressedActivity");
            if (CapsLockonoff && Shift12onoff) {
                chars.push('y');
                inputBox.value = chars.join('');
            }
            else if (CapsLockonoff || Shift12onoff) {
                chars.push('Y');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('y');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "KeyU":
            U.classList.toggle("keyboardpressedActivity");
            if (CapsLockonoff && Shift12onoff) {
                chars.push('u');
                inputBox.value = chars.join('');
            }
            else if (CapsLockonoff || Shift12onoff) {
                chars.push('U');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('u');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "KeyI":
            I.classList.toggle("keyboardpressedActivity");
            if (CapsLockonoff && Shift12onoff) {
                chars.push('i');
                inputBox.value = chars.join('');
            }
            else if (CapsLockonoff || Shift12onoff) {
                chars.push('I');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('i');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "KeyO":
            O.classList.toggle("keyboardpressedActivity");
            if (CapsLockonoff && Shift12onoff) {
                chars.push('o');
                inputBox.value = chars.join('');
            }
            else if (CapsLockonoff || Shift12onoff) {
                chars.push('O');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('o');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "KeyP":
            P.classList.toggle("keyboardpressedActivity");
            if (CapsLockonoff && Shift12onoff) {
                chars.push('p');
                inputBox.value = chars.join('');
            }
            else if (CapsLockonoff || Shift12onoff) {
                chars.push('P');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('p');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "BracketLeft":
            BigCurlyBracLeft.classList.toggle("keyboardpressedActivity");
            if (Shift12onoff) {
                chars.push('{');
                inputBox.value = chars.join('');
            } else {
                chars.push('[');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "BracketRight":
            BigCurlyBracRight.classList.toggle("keyboardpressedActivity");
            if (Shift12onoff) {
                chars.push('}');
                inputBox.value = chars.join('');
            } else {
                chars.push(']');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "Backslash":
            BackSlashLine.classList.toggle("keyboardpressedActivity");
            if (Shift12onoff) {
                chars.push('|');
                inputBox.value = chars.join('');
            } else {
                chars.push('\\');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "Backspace":
            BackSpace.classList.toggle("keyboardpressedActivity");
            chars.pop();
            inputBox.value = chars.join('');
            break;
        case "CapsLock":
            CapsLock.classList.toggle("keyboardpressedActivity");
            CapsLock.classList.toggle('activeBtn');
            alphabetArray.forEach(aBtn => {
                aBtn.classList.toggle('upperCase');
            });
            if (CapsLock.classList.contains('activeBtn')) {
                CapsLockonoff = true;
            }
            else {
                CapsLockonoff = false;
            }
            break;
        case "KeyA":
            A.classList.toggle("keyboardpressedActivity");
            if (CapsLockonoff && Shift12onoff) {
                chars.push('a');
                inputBox.value = chars.join('');
            }
            else if (CapsLockonoff || Shift12onoff) {
                chars.push('A');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('a');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "KeyS":
            S.classList.toggle("keyboardpressedActivity");
            if (CapsLockonoff && Shift12onoff) {
                chars.push('s');
                inputBox.value = chars.join('');
            }
            else if (CapsLockonoff || Shift12onoff) {
                chars.push('S');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('s');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "KeyD":
            D.classList.toggle("keyboardpressedActivity");
            if (CapsLockonoff && Shift12onoff) {
                chars.push('d');
                inputBox.value = chars.join('');
            }
            else if (CapsLockonoff || Shift12onoff) {
                chars.push('D');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('d');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "KeyF":
            F.classList.toggle("keyboardpressedActivity");
            if (CapsLockonoff && Shift12onoff) {
                chars.push('f');
                inputBox.value = chars.join('');
            }
            else if (CapsLockonoff || Shift12onoff) {
                chars.push('F');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('f');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "KeyG":
            G.classList.toggle("keyboardpressedActivity");
            if (CapsLockonoff && Shift12onoff) {
                chars.push('g');
                inputBox.value = chars.join('');
            }
            else if (CapsLockonoff || Shift12onoff) {
                chars.push('G');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('g');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "KeyH":
            H.classList.toggle("keyboardpressedActivity");
            if (CapsLockonoff && Shift12onoff) {
                chars.push('h');
                inputBox.value = chars.join('');
            }
            else if (CapsLockonoff || Shift12onoff) {
                chars.push('H');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('h');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "KeyJ":
            J.classList.toggle("keyboardpressedActivity");
            if (CapsLockonoff && Shift12onoff) {
                chars.push('j');
                inputBox.value = chars.join('');
            }
            else if (CapsLockonoff || Shift12onoff) {
                chars.push('J');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('j');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "KeyK":
            K.classList.toggle("keyboardpressedActivity");
            if (CapsLockonoff && Shift12onoff) {
                chars.push('k');
                inputBox.value = chars.join('');
            }
            else if (CapsLockonoff || Shift12onoff) {
                chars.push('K');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('k');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "KeyL":
            L.classList.toggle("keyboardpressedActivity");
            if (CapsLockonoff && Shift12onoff) {
                chars.push('l');
                inputBox.value = chars.join('');
            }
            else if (CapsLockonoff || Shift12onoff) {
                chars.push('L');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('l');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "Semicolon":
            SemiandColon.classList.toggle("keyboardpressedActivity");
            if (Shift12onoff) {
                chars.push(':');
                inputBox.value = chars.join('');
            } else {
                chars.push(';');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "Quote":
            SingleDoubleQuote.classList.toggle("keyboardpressedActivity");
            if (Shift12onoff) {
                chars.push('"');
                inputBox.value = chars.join('');
            } else {
                chars.push('\'');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "Enter":
            Enter.classList.toggle("keyboardpressedActivity");
            chars.push(`\n`)
            inputBox.value = chars.join('');
            AutoTurnOffShift();
            break;
        case "ShiftLeft":
            Shift1.classList.toggle("keyboardpressedActivity");
            if (CapsLockonoff) {
                if (Shift12onoff) {
                    AutoTurnOffShift();
                }
                else {
                    Shift12onoff = true;
                    Shift1.classList.toggle('activeBtn');
                    alphabetArray.forEach(aBtn => {
                        aBtn.classList.remove('upperCase');
                    });
                }
            }
            else {
                if (Shift12onoff) {
                    AutoTurnOffShift();
                }
                else {
                    Shift12onoff = true;
                    Shift1.classList.toggle('activeBtn');
                    alphabetArray.forEach(aBtn => {
                        aBtn.classList.add('upperCase');
                    });
                }
            }
            break;
        case "KeyZ":
            Z.classList.toggle("keyboardpressedActivity");
            if (CapsLockonoff && Shift12onoff) {
                chars.push('z');
                inputBox.value = chars.join('');
            }
            else if (CapsLockonoff || Shift12onoff) {
                chars.push('Z');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('z');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "KeyX":
            X.classList.toggle("keyboardpressedActivity");
            if (CapsLockonoff && Shift12onoff) {
                chars.push('x');
                inputBox.value = chars.join('');
            }
            else if (CapsLockonoff || Shift12onoff) {
                chars.push('X');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('x');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "KeyC":
            C.classList.toggle("keyboardpressedActivity");
            if (CapsLockonoff && Shift12onoff) {
                chars.push('c');
                inputBox.value = chars.join('');
            }
            else if (CapsLockonoff || Shift12onoff) {
                chars.push('C');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('c');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "KeyV":
            V.classList.toggle("keyboardpressedActivity");
            if (CapsLockonoff && Shift12onoff) {
                chars.push('v');
                inputBox.value = chars.join('');
            }
            else if (CapsLockonoff || Shift12onoff) {
                chars.push('V');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('v');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "KeyB":
            B.classList.toggle("keyboardpressedActivity");
            if (CapsLockonoff && Shift12onoff) {
                chars.push('b');
                inputBox.value = chars.join('');
            }
            else if (CapsLockonoff || Shift12onoff) {
                chars.push('B');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('b');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "KeyN":
            N.classList.toggle("keyboardpressedActivity");
            if (CapsLockonoff && Shift12onoff) {
                chars.push('n');
                inputBox.value = chars.join('');
            }
            else if (CapsLockonoff || Shift12onoff) {
                chars.push('N');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('n');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "KeyM":
            M.classList.toggle("keyboardpressedActivity");
            if (CapsLockonoff && Shift12onoff) {
                chars.push('m');
                inputBox.value = chars.join('');
            }
            else if (CapsLockonoff || Shift12onoff) {
                chars.push('M');
                inputBox.value = chars.join('');
            }
            else {
                chars.push('m');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "Comma":
            LesserThanComma.classList.toggle("keyboardpressedActivity");
            if (Shift12onoff) {
                chars.push('<');
                inputBox.value = chars.join('');
            } else {
                chars.push(',');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "Period":
            GreaterThanDot.classList.toggle("keyboardpressedActivity");
            if (Shift12onoff) {
                chars.push('>');
                inputBox.value = chars.join('');
            } else {
                chars.push('.');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "Slash":
            QuestionMarkSlash.classList.toggle("keyboardpressedActivity");
            if (Shift12onoff) {
                chars.push('?');
                inputBox.value = chars.join('');
            } else {
                chars.push('/');
                inputBox.value = chars.join('');
            }
            AutoTurnOffShift();
            break;
        case "PageUp":
            Up.classList.toggle("keyboardpressedActivity");
            break;
        case "ArrowUp":
            Up.classList.toggle("keyboardpressedActivity");
            AutoTurnOffShift();
            break;
        case "ShiftRight":
            Shift2.classList.toggle("keyboardpressedActivity");
            if (CapsLockonoff) {
                if (Shift12onoff) {
                    AutoTurnOffShift();
                }
                else {
                    Shift12onoff = true;
                    Shift2.classList.toggle('activeBtn');
                    alphabetArray.forEach(aBtn => {
                        aBtn.classList.remove('upperCase');
                    });
                }
            }
            else {
                if (Shift12onoff) {
                    AutoTurnOffShift();
                }
                else {
                    Shift12onoff = true;
                    Shift2.classList.toggle('activeBtn');
                    alphabetArray.forEach(aBtn => {
                        aBtn.classList.add('upperCase');
                    });
                }
            }
            break;
        case "ControlLeft":
            Control1.classList.toggle("keyboardpressedActivity");
            controlvalue = true;
            break;
        case "MetaLeft":
            Win1.classList.toggle("keyboardpressedActivity");
            break;
        case "AltLeft":
            Alt1.classList.toggle("keyboardpressedActivity");
            break;
        case "Space":
            SpaceBar.classList.toggle("keyboardpressedActivity");
            chars.push(' ');
            inputBox.value = chars.join('');
            AutoTurnOffShift();
            break;
        case "AltRight":
            Alt2.classList.toggle("keyboardpressedActivity");
            break;
        case "MetaRight":
            Win2.classList.toggle("keyboardpressedActivity");
            break;
        case "Home":
            Left.classList.toggle("keyboardpressedActivity");
            AutoTurnOffShift();
            break;
        case "ArrowLeft":
            Left.classList.toggle("keyboardpressedActivity");
            AutoTurnOffShift();
            break;
        case "PageDown":
            Down.classList.toggle("keyboardpressedActivity");
            AutoTurnOffShift();
            break;
        case "ArrowDown":
            Down.classList.toggle("keyboardpressedActivity");
            AutoTurnOffShift();
            break;
        case "End":
            Right.classList.toggle("keyboardpressedActivity");
            AutoTurnOffShift();
            break;
        case "ArrowRight":
            Right.classList.toggle("keyboardpressedActivity");
            AutoTurnOffShift();
            break;
        case "ControlRight":
            Control2.classList.toggle("keyboardpressedActivity");
            controlvalue = true;
            break;
        default:
            break;
    }
};
function KeyBoardLogicKeyUp(event) {
    event.preventDefault;
    // console.log(event.key);
    switch (event.code) {
        case "Escape":
            Esc.classList.toggle("keyboardpressedActivity");
            break;
        case "Backquote":
            Esc.classList.toggle("keyboardpressedActivity");
            break;
        case "F1":
            F1.classList.toggle("keyboardpressedActivity");
            break;
        case "Digit1":
            F1.classList.toggle("keyboardpressedActivity");
            break;
        case "F2":
            F2.classList.toggle("keyboardpressedActivity");
            break;
        case "Digit2":
            F2.classList.toggle("keyboardpressedActivity");
            break;
        case "F3":
            F3.classList.toggle("keyboardpressedActivity");
            break;
        case "Digit3":
            F3.classList.toggle("keyboardpressedActivity");
            break;
        case "F4":
            F4.classList.toggle("keyboardpressedActivity");
            break;
        case "Digit4":
            F4.classList.toggle("keyboardpressedActivity");
            break;
        case "F5":
            F5.classList.toggle("keyboardpressedActivity");
            break;
        case "Digit5":
            F5.classList.toggle("keyboardpressedActivity");
            break;
        case "F6":
            F6.classList.toggle("keyboardpressedActivity");
            break;
        case "Digit6":
            F6.classList.toggle("keyboardpressedActivity");
            break;
        case "F7":
            F7.classList.toggle("keyboardpressedActivity");
            break;
        case "Digit7":
            F7.classList.toggle("keyboardpressedActivity");
            break;
        case "F8":
            F8.classList.toggle("keyboardpressedActivity");
            break;
        case "Digit8":
            F8.classList.toggle("keyboardpressedActivity");
            break;
        case "F9":
            F9.classList.toggle("keyboardpressedActivity");
            break;
        case "Digit9":
            F9.classList.toggle("keyboardpressedActivity");
            break;
        case "F10":
            F10.classList.toggle("keyboardpressedActivity");
            break;
        case "Digit0":
            F10.classList.toggle("keyboardpressedActivity");
            break;
        case "F11":
            F11.classList.toggle("keyboardpressedActivity");
            break;
        case "Minus":
            F11.classList.toggle("keyboardpressedActivity");
            break;
        case "F12":
            F12.classList.toggle("keyboardpressedActivity");
            break;
        case "Equal":
            F12.classList.toggle("keyboardpressedActivity");
            break;
        case "Delete":
            Del.classList.toggle("keyboardpressedActivity");
            break;
        case "Tab":
            Tab.classList.toggle("keyboardpressedActivity");
            break;
        case "KeyQ":
            Q.classList.toggle("keyboardpressedActivity");
            break;
        case "KeyW":
            W.classList.toggle("keyboardpressedActivity");
            break;
        case "KeyE":
            E.classList.toggle("keyboardpressedActivity");
            break;
        case "KeyR":
            R.classList.toggle("keyboardpressedActivity");
            break;
        case "KeyT":
            T.classList.toggle("keyboardpressedActivity");
            break;
        case "KeyY":
            Y.classList.toggle("keyboardpressedActivity");
            break;
        case "KeyU":
            U.classList.toggle("keyboardpressedActivity");
            break;
        case "KeyI":
            I.classList.toggle("keyboardpressedActivity");
            break;
        case "KeyO":
            O.classList.toggle("keyboardpressedActivity");
            break;
        case "KeyP":
            P.classList.toggle("keyboardpressedActivity");
            break;
        case "BracketLeft":
            BigCurlyBracLeft.classList.toggle("keyboardpressedActivity");
            break;
        case "BracketRight":
            BigCurlyBracRight.classList.toggle("keyboardpressedActivity");
            break;
        case "Backslash":
            BackSlashLine.classList.toggle("keyboardpressedActivity");
            break;
        case "Backspace":
            BackSpace.classList.toggle("keyboardpressedActivity");
            break;
        case "CapsLock":
            CapsLock.classList.toggle("keyboardpressedActivity");
            break;
        case "KeyA":
            A.classList.toggle("keyboardpressedActivity");
            break;
        case "KeyS":
            S.classList.toggle("keyboardpressedActivity");
            break;
        case "KeyD":
            D.classList.toggle("keyboardpressedActivity");
            break;
        case "KeyF":
            F.classList.toggle("keyboardpressedActivity");
            break;
        case "KeyG":
            G.classList.toggle("keyboardpressedActivity");
            break;
        case "KeyH":
            H.classList.toggle("keyboardpressedActivity");
            break;
        case "KeyJ":
            J.classList.toggle("keyboardpressedActivity");
            break;
        case "KeyK":
            K.classList.toggle("keyboardpressedActivity");
            break;
        case "KeyL":
            L.classList.toggle("keyboardpressedActivity");
            break;
        case "Semicolon":
            SemiandColon.classList.toggle("keyboardpressedActivity");
            break;
        case "Quote":
            SingleDoubleQuote.classList.toggle("keyboardpressedActivity");
            break;
        case "Enter":
            Enter.classList.toggle("keyboardpressedActivity");
            break;
        case "ShiftLeft":
            Shift1.classList.toggle("keyboardpressedActivity");
            break;
        case "KeyZ":
            Z.classList.toggle("keyboardpressedActivity");
            break;
        case "KeyX":
            X.classList.toggle("keyboardpressedActivity");
            break;
        case "KeyC":
            C.classList.toggle("keyboardpressedActivity");
            break;
        case "KeyV":
            V.classList.toggle("keyboardpressedActivity");
            break;
        case "KeyB":
            B.classList.toggle("keyboardpressedActivity");
            break;
        case "KeyN":
            N.classList.toggle("keyboardpressedActivity");
            break;
        case "KeyM":
            M.classList.toggle("keyboardpressedActivity");
            break;
        case "Comma":
            LesserThanComma.classList.toggle("keyboardpressedActivity");
            break;
        case "Period":
            GreaterThanDot.classList.toggle("keyboardpressedActivity");
            break;
        case "Slash":
            QuestionMarkSlash.classList.toggle("keyboardpressedActivity");
            break;
        case "ArrowUp":
            Up.classList.toggle("keyboardpressedActivity");
            break;
        case "ShiftRight":
            Shift2.classList.toggle("keyboardpressedActivity");
            break;
        case "ControlLeft":
            Control1.classList.toggle("keyboardpressedActivity");
            controlvalue = false;
            break;
        case "MetaLeft":
            Win1.classList.toggle("keyboardpressedActivity");
            break;
        case "AltLeft":
            Alt1.classList.toggle("keyboardpressedActivity");
            break;
        case "Space":
            SpaceBar.classList.toggle("keyboardpressedActivity");
            break;
        case "AltRight":
            Alt2.classList.toggle("keyboardpressedActivity");
            break;
        case "MetaRight":
            Win2.classList.toggle("keyboardpressedActivity");
            break;
        case "Home":
            Left.classList.toggle("keyboardpressedActivity");
            break;
        case "ArrowLeft":
            Left.classList.toggle("keyboardpressedActivity");
            break;
        case "PageDown":
            Down.classList.toggle("keyboardpressedActivity");
            break;
        case "ArrowDown":
            Down.classList.toggle("keyboardpressedActivity");
            break;
        case "End":
            Right.classList.toggle("keyboardpressedActivity");
            break;
        case "ArrowRight":
            Right.classList.toggle("keyboardpressedActivity");
            break;
        case "ControlRight":
            Control2.classList.toggle("keyboardpressedActivity");
            controlvalue = false;
            break;
        default:
            break;
    }
};
alphabetArray.forEach(aBtn => {
    aBtn.addEventListener('click', () => {
        keyplayAudio();
        if (Shift12onoff) {
            inputBox.value += aBtn.innerText;
            chars = inputBox.value.split('');
            AutoTurnOffShift();
        }
        else {
            inputBox.value += aBtn.innerText;
            chars = inputBox.value.split('');
        }
    });
});
BackSpace.addEventListener('click', () => {
    if (!controlvalue) {
        keyplayAudio();
        chars.pop();
        inputBox.value = chars.join('');
        AutoTurnOffShift();
    }
    else {
        inputBox.value = "";
    }
});
SpaceBar.addEventListener('click', () => {
    keyplayAudio();
    chars.push(' ');
    inputBox.value = chars.join('');
    AutoTurnOffShift();
});

CapsLock.addEventListener('click', () => {
    keyplayAudio();
    CapsLock.classList.toggle('activeBtn');
    alphabetArray.forEach(aBtn => {
        aBtn.classList.toggle('upperCase');
    });
    if (CapsLock.classList.contains('activeBtn')) {
        CapsLockonoff = true;
    }
    else {
        CapsLockonoff = false;
    }
    // AutoTurnOffShift();
});
Shift1.addEventListener('click', () => {
    keyplayAudio();
    if (CapsLockonoff) {
        if (Shift12onoff) {
            AutoTurnOffShift();
        }
        else {
            Shift12onoff = true;
            Shift1.classList.toggle('activeBtn');
            alphabetArray.forEach(aBtn => {
                aBtn.classList.remove('upperCase');
            });
        }
    }
    else {
        if (Shift12onoff) {
            AutoTurnOffShift();
        }
        else {
            Shift12onoff = true;
            Shift1.classList.toggle('activeBtn');
            alphabetArray.forEach(aBtn => {
                aBtn.classList.add('upperCase');
            });
        }
    }

});
Shift2.addEventListener('click', () => {
    keyplayAudio();
    if (CapsLockonoff) {
        if (Shift12onoff) {
            AutoTurnOffShift();
        }
        else {
            Shift12onoff = true;
            Shift2.classList.toggle('activeBtn');
            alphabetArray.forEach(aBtn => {
                aBtn.classList.remove('upperCase');
            });
        }
    }
    else {
        if (Shift12onoff) {
            AutoTurnOffShift();
        }
        else {
            Shift12onoff = true;
            Shift2.classList.toggle('activeBtn');
            alphabetArray.forEach(aBtn => {
                aBtn.classList.add('upperCase');
            });
        }
    }

});
Esc.addEventListener('click', () => {
    keyplayAudio();
    if (Shift12onoff) {
        chars.push('~');
        inputBox.value = chars.join('');
    } else {
        chars.push('`');
        inputBox.value = chars.join('');
    }
    AutoTurnOffShift();
});
com.addEventListener('click', () => {
    keyplayAudio();
    chars.push('.');
    chars.push('c');
    chars.push('o');
    chars.push('m');
    inputBox.value = chars.join('');
    AutoTurnOffShift();
});
Del.addEventListener('click', () => {
    keyplayAudio();
    let spaceValue = chars.lastIndexOf(' ');
    let poppedValue = (chars.length - spaceValue);
    for (let i = 0; i < poppedValue; i++) {
        chars.pop();
    };
    inputBox.value = chars.join('');
    AutoTurnOffShift();
});
Tab.addEventListener('click', () => {
    keyplayAudio();
    chars.push(' ');
    chars.push(' ');
    chars.push(' ');
    chars.push(' ');
    chars.push(' ');
    inputBox.value = chars.join('');
    AutoTurnOffShift();
});
BigCurlyBracLeft.addEventListener('click', () => {
    keyplayAudio();
    if (Shift12onoff) {
        chars.push('{');
        inputBox.value = chars.join('');
    } else {
        chars.push('[');
        inputBox.value = chars.join('');
    }
    AutoTurnOffShift();
});
BigCurlyBracRight.addEventListener('click', () => {
    keyplayAudio();
    if (Shift12onoff) {
        chars.push('}');
        inputBox.value = chars.join('');
    } else {
        chars.push(']');
        inputBox.value = chars.join('');
    }
    AutoTurnOffShift();
});
BackSlashLine.addEventListener('click', () => {
    keyplayAudio();
    if (Shift12onoff) {
        chars.push('|');
        inputBox.value = chars.join('');
    } else {
        chars.push('\\');
        inputBox.value = chars.join('');
    }
    AutoTurnOffShift();
});
SemiandColon.addEventListener('click', () => {
    keyplayAudio();
    if (Shift12onoff) {
        chars.push(':');
        inputBox.value = chars.join('');
    } else {
        chars.push(';');
        inputBox.value = chars.join('');
    }
    AutoTurnOffShift();
});
SingleDoubleQuote.addEventListener('click', () => {
    keyplayAudio();
    if (Shift12onoff) {
        chars.push('"');
        inputBox.value = chars.join('');
    } else {
        chars.push('\'');
        inputBox.value = chars.join('');
    }
    AutoTurnOffShift();
});
GreaterThanDot.addEventListener('click', () => {
    keyplayAudio();
    if (Shift12onoff) {
        chars.push('>');
        inputBox.value = chars.join('');
    } else {
        chars.push('.');
        inputBox.value = chars.join('');
    }
    AutoTurnOffShift();
});
LesserThanComma.addEventListener('click', () => {
    keyplayAudio();
    if (Shift12onoff) {
        chars.push('<');
        inputBox.value = chars.join('');
    } else {
        chars.push(',');
        inputBox.value = chars.join('');
    }
    AutoTurnOffShift();
});
QuestionMarkSlash.addEventListener('click', () => {
    keyplayAudio();
    if (Shift12onoff) {
        chars.push('?');
        inputBox.value = chars.join('');
    } else {
        chars.push('/');
        inputBox.value = chars.join('');
    }
    AutoTurnOffShift();
});
F1.addEventListener('click', () => {
    keyplayAudio();
    if (Shift12onoff) {
        chars.push('!');
        inputBox.value = chars.join('');
    }
    else {
        chars.push('1');
        inputBox.value = chars.join('');
    }
    AutoTurnOffShift();
});
F2.addEventListener('click', () => {
    keyplayAudio();
    if (Shift12onoff) {
        chars.push('@');
        inputBox.value = chars.join('');
    }
    else {
        chars.push('2');
        inputBox.value = chars.join('');
    }
    AutoTurnOffShift();
});
F3.addEventListener('click', () => {
    keyplayAudio();
    if (Shift12onoff) {
        chars.push('#');
        inputBox.value = chars.join('');
    }
    else {
        chars.push('3');
        inputBox.value = chars.join('');
    }
    AutoTurnOffShift();
});
F4.addEventListener('click', () => {
    keyplayAudio();
    if (Shift12onoff) {
        chars.push('$');
        inputBox.value = chars.join('');
    }
    else {
        chars.push('4');
        inputBox.value = chars.join('');
    }
    AutoTurnOffShift();
});
F5.addEventListener('click', () => {
    keyplayAudio();
    if (Shift12onoff) {
        chars.push('%');
        inputBox.value = chars.join('');
    }
    else {
        chars.push('5');
        inputBox.value = chars.join('');
    }
    AutoTurnOffShift();
});
F6.addEventListener('click', () => {
    keyplayAudio();
    if (Shift12onoff) {
        chars.push('^');
        inputBox.value = chars.join('');
    }
    else {
        chars.push('6');
        inputBox.value = chars.join('');
    }
    AutoTurnOffShift();
});
F7.addEventListener('click', () => {
    keyplayAudio();
    if (Shift12onoff) {
        chars.push('&');
        inputBox.value = chars.join('');
    }
    else {
        chars.push('7');
        inputBox.value = chars.join('');
    }
    AutoTurnOffShift();
});
F8.addEventListener('click', () => {
    keyplayAudio();
    if (Shift12onoff) {
        chars.push('*');
        inputBox.value = chars.join('');
    }
    else {
        chars.push('8');
        inputBox.value = chars.join('');
    }
    AutoTurnOffShift();
});
F9.addEventListener('click', () => {
    keyplayAudio();
    if (Shift12onoff) {
        chars.push('(');
        inputBox.value = chars.join('');
    }
    else {
        chars.push('9');
        inputBox.value = chars.join('');
    }
    AutoTurnOffShift();
});
F10.addEventListener('click', () => {
    keyplayAudio();
    if (Shift12onoff) {
        chars.push(')');
        inputBox.value = chars.join('');
    }
    else {
        chars.push('0');
        inputBox.value = chars.join('');
    }
    AutoTurnOffShift();
});
F11.addEventListener('click', () => {
    keyplayAudio();
    if (Shift12onoff) {
        chars.push('_');
        inputBox.value = chars.join('');
    }
    else {
        chars.push('-');
        inputBox.value = chars.join('');
    }
    AutoTurnOffShift();
});
F12.addEventListener('click', () => {
    keyplayAudio();
    if (Shift12onoff) {
        chars.push('+');
        inputBox.value = chars.join('');
    }
    else {
        chars.push('=');
        inputBox.value = chars.join('');
    }
});
Enter.addEventListener('click', () => {
    keyplayAudio();
    chars.push(`\n`)
    inputBox.value = chars.join('');
    AutoTurnOffShift();
});