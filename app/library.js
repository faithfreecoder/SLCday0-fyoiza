
function findMinMax(mylist)
{ 
//minMax= [];  
minMax= [];  
var max =Math.max.apply(null, mylist) // 4
var min= Math.min.apply(null, mylist)
if (min===max)
{
  return [min];
}
else
return [min,max];
};

module.exports = findMinMax;
