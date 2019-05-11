/**
 * ES6增加了Set，它是数学里面“集合”的概念，那么问题就来了，数学里面的“集合”有哪些特性？
 * 1. 构造方式
 * 2. 基本方法add()/delete()/has()/clear()
 * 3. 工具方法keys()/values()/entries()/forEach()
 * 4. 数学上的集合需要支持交并补运算
 */
//1. 构造方式
let set1 = new Set([1, 2, 3, 4, 5]);
console.log(set1);
console.log(...set1);

//2. 基本方法add()/delete()/has()/clear()

//3. 工具方法keys()/values()/entries()/forEach()

/**
 * 4. 数学上的集合需要支持交并补运算
 * Note：给学员解释，在以前这些操作都需要借助于第三方library来做，演示lodash的例子
 */
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
let union = new Set([...a, ...b]);
let intersect = new Set([...a].filter(x => b.has(x)));
let difference = new Set([...a].filter(x => !b.has(x)));
console.log(union);
console.log(intersect);
console.log(difference);
