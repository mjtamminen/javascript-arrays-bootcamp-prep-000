var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, x) {
  return new Array (chocolateBars.unshift(x))
}
function destructivelyAddElementToBeginningOfArray() {
  return [...chocolateBars, chocolateBars.unshift()]
}