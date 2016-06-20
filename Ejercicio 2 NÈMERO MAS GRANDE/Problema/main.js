//Escribe aquí tu código

function factorial() {

var num = parseInt(prompt("Indica el número que desees saber su factorial"));
var fact=1;

for(i=num;i>1;i--){
	fact=fact*i;
	document.write(fact + "<br/>");
	}
}