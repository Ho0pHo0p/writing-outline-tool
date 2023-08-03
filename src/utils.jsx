
function filterArray (array, num) {
  return array.filter((a) => a.seqNum !== num)
}

function filterSegment(array, num) {
  return array.filter((a) => a.seqNum === num)[0];
}

export { filterArray, filterSegment}