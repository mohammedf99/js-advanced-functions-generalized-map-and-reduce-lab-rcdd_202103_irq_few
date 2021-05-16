// Add your functions here

const map = function (srcArr, callBackFunction) {
  
  return arr.map(callBackFunction);
  
}


function reduce(sourceArray, functions, startingPoint=0){
  if(startingPoint=="0") return sourceArray.reduce(functions);
  else return sourceArray.reduce(functions, startingPoint);
} 

