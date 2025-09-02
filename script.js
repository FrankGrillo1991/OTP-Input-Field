const inputs = document.getElementById("inputs");
// console.log('inputs element:', inputs);

inputs.addEventListener("input", function (e) {
    const target = e.target;
    const val = target.value;
    // console.log('Input event:', { target, val });

    if (isNaN(val)) {
    // console.log('Non-numeric input detected, clearing value.');
        target.value = "";
        return;
    }

    if (val != "") {
        const next = target.nextElementSibling;
    // console.log('Moving focus to next input:', next);
        if (next) {
            next.focus();
        }
    }
});

inputs.addEventListener("keyup", function (e) {
    const target = e.target;
    const key = e.key.toLowerCase();
    // console.log('Keyup event:', { target, key });

    if (key == "backspace" || key == "delete") {
    // console.log('Backspace/Delete pressed, clearing value and moving focus to previous input.');
        target.value = "";
        const prev = target.prevElementSibling;
    // console.log('Moving focus to previous input:', prev);
        if (prev) {
            prev.focus();
        }
        return;
    }
});