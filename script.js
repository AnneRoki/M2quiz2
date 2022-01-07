function Total() {
    let pA = document.getElementById("age").value;
    let pW = document.getElementById("weight").value;
    let pH = document.getElementById("height").value;
    let gen
    let x
    if (document.getElementById("age").value.length == 0) {
        return
    }
    if (document.getElementById("weight").value.length == 0) {
        return
    }
    if (document.getElementById("height").value.length == 0) {
        return
    }
    if (document.getElementById("male").checked) {
        gen =  Math.round((10*pW)+(6.25*pH)-(5*pA)+5)
    } else if (document.getElementById("female").checked) {
        gen =  Math.round((10*pW)+(6.25*pH)-(5*pA)-161)
    }
    if (document.getElementById("1").selected) {
        x = gen
    }
    if (document.getElementById("2").selected) {
        x = gen*1.2
    }
    if (document.getElementById("3").selected) {
        x = gen*1.35
    }
    if (document.getElementById("4").selected) {
        x = gen*1.55
    }
    if (document.getElementById("5").selected) {
        x = gen*1.75
    }
    if (document.getElementById("6").selected) {
        x = gen*1.95
    }
    document.getElementById("mw").innerHTML = Math.round(x)
    document.getElementById("result").style = "margin: auto; width: 150px;padding:2px; height: 75px; background-color:orange; color:black;border-radius:5ch;text-align:center;"
}

function intakes(){
    let cal = document.getElementById("cal").value;
    let c;
    if (document.getElementById("cal")){
        c = cal
    }
    document.getElementById("totcal").innerHTML =2000-c;
    document.getElementById("con").style = " margin: auto;width: 150px; height: 75px; background-color:orange;padding:2px; color:black;border-radius:5ch;text-align:center;"

}