// 1000 个不重复的8位随机数字组成的字符串

const randomNumber = (length) => {
  const arr = new Set();
  for (let i = 0; arr.size < length; i++) {
    const n = Math.random().toString(10).substr(2,10);
    arr.add(n);
  }
  console.log(arr);
}

a(1000);
