const someArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const nthEvery = (interval, start, arr) => {
  let value = start;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[interval * i + start] === "undefined") return result;
    value = arr[interval * i + start - 1];
    result.push(value);
  }
  return result;
};

console.log(nthEvery(6, 2, someArr));
