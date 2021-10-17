/**
 * Quick array sorting
 * @param {Array} array Source array
 * @returns {Array} Sorted array
 */
function quicksort(array) {
  //基线条件
  if (array.length < 2) return array; 

  //递归条件
  let pivot = array[0]; //基准值:第一个元素
  let less = array.slice(1).filter(item => item <= pivot); //小于基准值的子数组
  let greater = array.slice(1).filter(item => item > pivot); //大于基准值的子数组
  
  return quicksort(less).concat(pivot, quicksort(greater));
}

//test
console.log(quicksort([10, 5, 2, 3])); // [2, 3, 5, 10]