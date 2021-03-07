function funh(){
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
    setTimeout(function(){
      element.classList.remove("pyro");
    },5000)

}
