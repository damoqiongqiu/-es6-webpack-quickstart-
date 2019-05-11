/**
 * ES5里面的Object其实就是Map结构，但是限制比较多，key只能是字符串
 * 1. 构造
 * 2. 基本方法get()/set()/size()/delete()/has()/clear()
 * 3. 工具方法keys()/values()/entries()
 */
//1. 构造
let map1=new Map();
map1.set(1,"test");
console.log(map1);

//2. 基本方法get()/set()/size()/delete()/has()/clear()
//用任意对象作为key，本质上使用内存地址作为key，这个特性和Java里面的HashMap是一致的
const map = new Map();
const k1 = ['a'];
const k2 = ['a'];
map.set(k1, 111).set(k2, 222);
map.get(k1);
map.get(k2);

//3. 工具方法keys()/values()/entries()
