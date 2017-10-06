/**
 * @public Creates an array of integers
 *
 * @param  {Number} start
 * @param  {Number} count
 * @return {Array}
 */
export default function createArrayOfIntegers(start, count) {
  let array = [];
  for (let i = start; i <= count; i++) {
    array.push(i);
  }

  return array;
}
