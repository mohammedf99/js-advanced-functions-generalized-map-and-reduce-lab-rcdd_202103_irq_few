// Add your functions here

const map = (srcArr, callBackFunction) => {
  
  return arr.map(callBackFunction);
  
}


// function reduce(sourceArray, functions, startingPoint=0){
//   if(startingPoint=="0") return sourceArray.reduce(functions);
//   else return sourceArray.reduce(functions, startingPoint);
// } 

// const reduce = (srcArr, callBackFunction, startingPoint = 0) => {
  
//   return srcArr.reduce(callBackFunction, startingPoint);
  
// }

const reduce = (srcArr, callBackFunction, startingPoint = 0) => {
  
  if(startingPoint == "0") 
    return srcArr.reduce(callBackFunction);
  else
    return srcArr.reduce(callBackFunction, startingPoint);
}