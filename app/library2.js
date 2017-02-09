module.exports = 
{

computeFizzBuzz: function fizzBuzz(num)
{
  if (num % 3 === 0 && num % 5 !== 0)
  {
    return 'fizz';
  }
  else if (num % 5 === 0 && num % 3 !== 0)
  {
    return 'Buzz';
  }
  else if (num % 3=== 0 && num % 5===0)
  {
    return 'fizzBuzz'
  }
  else 
  return num; 
},
}