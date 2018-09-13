var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray() {
  return new Array (chocolateBars.upshift())
}
function destructivelyAddElementToBeginningOfArray() {
  return [...chocolateBars, chocolateBars.unshift()]
}