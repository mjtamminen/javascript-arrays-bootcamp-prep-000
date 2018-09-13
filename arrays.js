var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, element) {
  return new Array (chocolateBars.unshift(element))
}
function destructivelyAddElementToBeginningOfArray() {
  return [...chocolateBars, chocolateBars.unshift()]
}