var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars) {
  return new Array (chocolateBars.unshift())
}
function destructivelyAddElementToBeginningOfArray() {
  return [...chocolateBars, chocolateBars.unshift()]
}