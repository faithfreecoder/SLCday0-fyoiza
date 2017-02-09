module.exports = 
{

 computeAverage: function(num1,num2,num3)
{
  var avg;
  avg = (num1 + num2+ num3)/3;
  return avg; 
},
computeFactorial: function(n)
{
  if(n===0||n===1)
  return 1;
  else 
  return n * this.computeFactorial(n-1);
},

convertTempCtoF: function(num)
{
 var toFahrenheit;
 toFahrenheit = (9/5 * num) +32;
 return toFahrenheit;
},

convertTempFtoC: function(num)
{
  var toCelcius;
  toCelcius = ((5/9)*(num-32)); 
 return toCelcius;
},
}