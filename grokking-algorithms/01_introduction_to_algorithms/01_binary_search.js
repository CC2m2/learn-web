function binary_search(list, item) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];

    if (guess === item) {
      return mid;
    }
    if (guess < item) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return null; //! 当找不到数据时，要有返回值
}

const my_list = [1, 3, 5, 7, 9];

console.log(binary_search(my_list, 3));
console.log(binary_search(my_list, -1));