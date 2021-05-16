// Add your functions here

const map = (arr, callbackFunction) => {
  
  return arr.map(callbackFunction);
  
}


const reduce = (arr, callbackFunction, startingPoint = 0) => {
  
  return arr.reduce(callbackFunction, startingPoint);
  
}