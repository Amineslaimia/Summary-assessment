function additem(){
var input=document.getElementById("inputid");
var color=document.getElementById("colorinputid");
var list = document.getElementById("unord");
var item = document.createElement("LI");
var textitem = document.createTextNode(input.value);
item.appendChild(textitem);
if (color.value==="blue"){
  item.className = "blue"
  list.appendChild(item);
}if (color.value==="red"){
  item.className = "red"
  list.appendChild(item);
}if (color.value==="yellow"){
  item.className = "yellow";
  list.appendChild(item);
}
}
