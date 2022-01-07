function Total() {
    let pA = document.getElementById("age").value;
    let pW = document.getElementById("weight").value;
    let pH = document.getElementById("height").value;
    let s
    let r
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
        s =  Math.round((10*pW)+(6.25*pH)-(5*pA)+5)
    } else if (document.getElementById("female").checked) {
        s =  Math.round((10*pW)+(6.25*pH)-(5*pA)-161)
    }
    if (document.getElementById("1").selected) {
        r = s
    }
    if (document.getElementById("2").selected) {
        r = s*1.2
    }
    if (document.getElementById("3").selected) {
        r = s*1.35
    }
    if (document.getElementById("4").selected) {
        r = s*1.55
    }
    if (document.getElementById("5").selected) {
        r = s*1.75
    }
    if (document.getElementById("6").selected) {
        r = s*1.95
    }
    document.getElementById("mw").innerHTML = Math.round(r)
    document.getElementById("totalBox").style = "margin: auto; width: 150px; height: 75px; background-color:white; color:black;"
}

function intakes(){
    let cal = document.getElementById("calorie").value;
    let c;
    if (document.getElementById("calorie")){
        c = cal
    }
    document.getElementById("fCal").innerHTML = c- 200;
    document.getElementById("lBox").style = "margin: auto; width: 150px; height: 75px; background-color:white; color:black;"

}