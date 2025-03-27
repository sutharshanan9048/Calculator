var input=document.querySelector("input");
function addValue(element){
    input.value+=element;
}
function clearVal(){
    input.value="";
}
function DelVal(){
   input.value=input.value.slice(0,input.value.length-1);    
}
function AddEvaluate(){
    input.value=eval(input.value);
}