// 给定一个任意数组，实现一个通用函数，让数组中的数据根据 key 排重：

const dedup = (data, getKey = () => {} ) => {
  let res = {}
  for (let i=0;i<data.length;i++) {
      const key = getKey(data[i])
    if (res[key] === undefined) {
        res[key] = data[i]
    }
  }
  return Object.values(res)
}
let data = [
  { id: 1, v: 1 },
  { id: 2, v: 2 },
  { id: 1, v: 1 },
];
// console.log(dedup(data, item => item.id))
// 以 id 作为排重 key，执行函数得到结果
// data = [
//   { id: 1, v: 1 },
//   { id: 2, v: 2 },
// ];

let data1 = [
  { id: 1, v: 1, id1: 1 },
  { id: 2, v: 2, id1: 2 },
  { id: 1, v: 1, id1: 1 },
]
console.log(dedup(data1, item => `${item.id}-----${item.id1}`))
// 以 id 和 id1 作为排重 key，执行函数得到结果
// data1 = [
//   { id: 1, v: 1, id1: 1 },
//   { id: 2, v: 2, id1: 2 },
// ];
