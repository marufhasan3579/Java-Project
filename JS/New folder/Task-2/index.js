function myfun()
{
	var a = parseInt(document.getElementById('num').value);
	console.log('a=',a);
	var b = parseInt(document.getElementById('num1').value);
	console.log('b=',b);
	document.getElementById('result').value = a+b;	
	console.log('a+b=',a+b);
}
function myfun1()
{
	var a = parseInt(document.getElementById('num').value);
	var b = parseInt(document.getElementById('num1').value);
	document.getElementById('result').value = a-b;	
}