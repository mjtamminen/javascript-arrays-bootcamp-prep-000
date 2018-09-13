var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  return (chocolateBars.unshift("element"))
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  return [...element, chocolateBars.unshift("element")]
}