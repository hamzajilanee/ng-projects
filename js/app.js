var errorText = "X and Y must be integers";
var xValue = document.getElementById('x');
var yValue = document.getElementById('y');
x = parseInt(xValue, 10).value;
y = parseInt(yValue, 10).value;
	function add(x, y)
{
    setResult(x + " plus " + y + " is " + (x + y));

}

function subtract(x, y)
{
    if (!isNaN(x) && !isNaN(y))
    {
        setResult(x + " minus " + y + " is " + (x - y));
    } else
    {
        setResult(errorText)            }
}

function setResult(result)
{
    document.getElementById('result').innerHTML = result;
}