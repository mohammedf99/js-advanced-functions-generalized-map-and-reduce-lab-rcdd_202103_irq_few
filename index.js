// Add your functions here

const map = (arr, callbackFunction) => {
  
  return arr.map(callbackFunction);
  
}


const reduce = (arr, callbackFunction, startingPoint) => {
  
  if (startingPoint !== undefined) return arr.reduce(callbackFunction)
  
}