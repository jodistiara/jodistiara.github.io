var string = document.getElementById("word").value;
function WordCount(string) {
  var jumlahkata = 0;
  var string = document.getElementById("word").value;
  for (var i = 0; i < string.length; i++){
    if (string[i] == " ") {
      jumlahkata = jumlahkata+1;
  	} 	
  }
  jumlahkata += 1;	
  alert("Jumlah Kata : " + jumlahkata + "Kata.");
}

var input=[""];
var a=1;

function insert(){
	var in1=document.forms["form1"]["deret"].value;
	input.push(in1);
}
function show(){
for(var i=0;i<input.length;i++){
alert(a+"."+input[i]);
a=a+1;
}
a=1;
}