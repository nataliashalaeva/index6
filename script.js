
let a = document.getElementById("a");
let b = document.getElementById("b");
let ok = document.getElementById("ok");
let res = document.getElementById("result");

function isNumeric(x) {
    return (/^[\d]+$/g).test(x);
}

ok.addEventListener("click", function() {
    let x = a.value;
    let y = b.value;
    if (!isNumeric(x)) {
        alert("Ошибка");
        return;
    }
    if (!isNumeric(y)) {
        alert("Ошибка");
        return;
    }
    let sum = parseInt(x) * parseInt(y);
    res.textContent = sum;
});
let radios = document.getElementById("myradios");
let check = document.getElementById("check-1");
radios.style.display = "none";
check.style.display = "none";
let r = document.getElementById("result1");
var result = "0";
r.innerHTML = result;

window.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    let s = document.getElementsByName("myselect");
    s[0].addEventListener("change", function(event) {
        let select = event.target;
        let radios = document.getElementById("myradios");
        let check = document.getElementById("check-1");
        if (select.value == "1") {
            radios.style.display = "none";
            check.style.display = "none";
            let r = document.getElementById("result1");
            var result = "150";
            r.innerHTML = result;
        } else if (select.value == "2") {
            radios.style.display = "block";
            check.style.display = "none";
            let r = document.getElementById("result1");
            var result = "Выберите";
            r.innerHTML = result;
        } else if (select.value == "3") {
            radios.style.display = "none";
            check.style.display = "block";
            let r = document.getElementById("result1");
            var result = "1000";
            r.innerHTML = result;
        }
    });

    let r = document.querySelectorAll(".myradios input[type=radio]");
    r.forEach(function(radio) {
        radio.addEventListener("change", function(event) {
            let r = event.target;
            if (r.value == "r1") {
                let r = document.getElementById("result1");
                var result = "350";
                r.innerHTML = result;
            } else if (r.value == "r2") {
                let r = document.getElementById("result1");
                var result = "450";
                r.innerHTML = result;
            } else if (r.value == "r3") {
                let r = document.getElementById("result1");
                var result = "350";
                r.innerHTML = result;
            }
        });
    });

    let c = document.getElementsByName("check-1");
    c[0].addEventListener("change", function(event) {
        if (this.checked) {
            let r = document.getElementById("result1");
            var result = "10000000";
            r.innerHTML = result;
        } else {
            let r = document.getElementById("result1");
            var result = "100";
            r.innerHTML = result;
        }
    });

    let button = document.getElementById("ok");
    button.addEventListener("click", ok);
    ok.addEventListener("click", function() {
        let x = a.value;
        let y = b.value;
        if (!isNumeric(x)) {
            alert("Ошибка");
            return;
        }
        if (!isNumeric(y)) {
            alert("Ошибка");
            return;
        }
        let sum = parseInt(x) * parseInt(y);
        res.innerHTML = sum;
    });
});
