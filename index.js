// Add your functions here

const map = function (srcArr, callBackFunction) {
  
  return arr.map(callBackFunction);
  
}


function reduce(srcArr, callBackFunction, startingPoint = 0){
  if(startingPoint == "0") return srcArr.reduce(callBackFunction);
  else return srcArr.reduce(callBackFunction, startingPoint);
} 

