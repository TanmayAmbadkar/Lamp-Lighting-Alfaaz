function myFunction(){
  var x = document.getElementsByClassName("over-img")[0];
  var y = document.getElementsByClassName("over-img2")[0];
  var z = document.getElementsByClassName("over-img3")[0];
  var a = document.getElementsByClassName("over-img4")[0];
  var b = document.getElementById("img7");
  //console.log(x.style.display); 
    x.style.display = "block";
    y.style.display = "block";
    a.style.display = "block";
    z.style.display = "block";
    b.style.display = "block";
    var element = document.getElementById("mydiv");
    element.classList.add("pyro");
}

function myFunc() {
  setInterval(function(){fetch('https://ctf-iiitv.tk/lamp').then(function(response){
  return response.json();
 }).then(function(jsondata){
   if(jsondata['out']==1)
     myFunction();
   else
     console.log(jsondata['out']);
 });}, 1000);
}
myFunc();
