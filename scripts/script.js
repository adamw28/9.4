var x=prompt("Podaj wysokość choinki");
function drawTree(x){
	for (var i=1; i<=x; i++){
		var star='';
		for (var j=1; j<=i; j++){
			star += '*';
		}
		console.log(star);
	}
}
drawTree(x);