var x=prompt("Podaj wysokość choinki");
function drawTree(x){var k=x;
	for (var i=1; i<=x; i++){
		var star='';
		for(k;k>1;k--){
			star+=' ';
			}
		for (var j=1; j<=i; j++){
			star += '**';
		}
	console.log(star);
	k=x-i;
	}
}
drawTree(x);