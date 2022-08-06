// let btn=document.getElementById("buton");
// let pass=document.getElementById("password");
// let change=document.getElementById("write");


// addEventListener('input',() => {
// if(btn.Value.length > 0 )
// {
//  pass.style.display="block";
// }else{
//  pass.style.display="none";

// }
// });




let pass=document.getElementById("pass");
let store=document.getElementById("store");
let change=document.getElementById("change");
addEventListener('input',function alikhan(){
    if ( pass.value.length>0) {
    store.style.display="block";
    
}else{
    store.style.display="none";
    pass.style.border=" 1px solid black";

}
if (pass.value.length >= 4) {
    change.innerHTML="weak";
    store.style.color="red";
    pass.style.border="2px solid red"


    
} 
if (pass.value.length >= 7) {
    change.innerHTML="weak";
    store.style.color="yellow";
    pass.style.border="2px solid yellow";
}

if(pass.value.length >= 12){
    change.innerHTML="strong";
    store.style.color="green";
    pass.style.border="2px solid green"
}
    
} )
  
    
https://nicepage.com/website-templates/preview/student-training-center-1278233?device=desktop