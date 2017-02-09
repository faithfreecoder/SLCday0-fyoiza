convertaritGeo: const aritGeo = function aritGeo(myarray)
{
  var i=0,j =1;
    
  for (i in myarray)
  if (myarray[j]-myarray[i] === myarray[j+1]-myarray[j])
  {
    
    i++,j++;
    return 'Arithmetic';
  }
    
  else if (myarray[j]-myarray[i] !== myarray[j+1]-myarray[j])
  {
    if ((myarray[j] * myarray[i]) + myarray[j] === myarray[j+1])
    {
      i++, j++
      return 'Geometric';
    }
    else 
    {
      return -1;
    }
  }
  else
  {
    return -1;
  }
},