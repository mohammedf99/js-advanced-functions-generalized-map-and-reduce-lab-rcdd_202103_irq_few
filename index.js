// Add your functions here

const map = (arr, callbackFunction) => {
  
  return arr.map(callbackFunction);
  
}


function reduce(sourceArray, functions, startingPoint=0){
  if(startingPoint=="0") return sourceArray.reduce(functions);
  else return sourceArray.reduce(functions, startingPoint);
} 