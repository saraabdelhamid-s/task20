
document.querySelector("#form").addEventListener("submit",function(event){
var works = document.querySelector("#works").value;
var result = document.querySelector("#result");

if(works == ""){
    event.preventDefault();
    
}else{
    var myli = document.createElement("li");
 myli.innerHTML = works ;
 result.append(myli);
 var works = document.querySelector("#works").value="";
 event.preventDefault();
}

})



