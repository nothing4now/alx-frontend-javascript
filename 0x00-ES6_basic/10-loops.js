export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    const tempArray = array;
    tempArray[tempArray.indexOf(value)] = appendString + value;
  }

  return array;
}
