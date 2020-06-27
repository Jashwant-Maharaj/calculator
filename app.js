function getNumber(num){
    document.getElementById("result").value += num;
}
function clearScr(){
    document.getElementById("result").value = "";
}
function showResult(){
    var result = document.getElementById("result").value;
    document.getElementById("result").value = eval(result);
}
