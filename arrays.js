var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray() {
  return new Array (chocolateBars.push())
}
function destructivelyAddElementToBeginningOfArray() {
  return [...chocolateBars, chocolateBars.upshift()]
}