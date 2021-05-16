// Add your functions here

const map = (arr, callbackFunction) => {
  
  return arr.map(callbackFunction);
  
}


const reduce = (arr, callbackFunction, startingPoint = 0) => {
  
  if (startingPoint !== undefined) return arr.reduce(callbackFunction, startingPoint)
  else return arr.reduce(callbackFunction);
  
}