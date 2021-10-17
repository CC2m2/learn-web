//寻找数组中最小的值
function findSmallest(array) {
  let smallest = arr[0]; //存储最小的值
  let smallestIndex = 0; //存储最小值的索引

  for(let i = 1; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
      smallestIndex = i;
    }
  }

  return smallestIndex; //返回最小值的索引
}

//选择排序
function selectionSort(array) {
  let sortArray = [...array];
  let sortedArray = []; //存储排序后的数组
  let length = sortArray.length; //!!! for循环中不能直接用array.length作为边界值 -> array数组的内容一直在变化

  for (let i = 0; i < length; i++) {
    let smallestIndex = findSmallest(sortArray); //找出数组中最小元素的索引
    sortedArray.push(sortArray[smallestIndex]); //将最小的数push到新的数组中
    sortArray.splice(smallestIndex, 1); //更新下一轮排序的数组
  }

  return sortedArray;
}

//test
const arr = [5, 3, 6, 2, 10];
console.log(selectionSort(arr)); //// [2, 3, 5, 6, 10]