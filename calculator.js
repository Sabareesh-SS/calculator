function cleardisp() {
    const display=document.getElementById('display');
    display.value = '';
}

function disp(value) {
    const display=document.getElementById('display');
    display.value += value;
}

function del() {
    const display=document.getElementById('display');
    display.value = display.value.slice(0,-1);
}

function equalsto() {
    const display=document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "ERROR";
    }
}

