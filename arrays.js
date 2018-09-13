var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, element) {
  return (chocolateBars.unshift("element"))
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, element) {
  return [...element, chocolateBars.unshift("element")]
}