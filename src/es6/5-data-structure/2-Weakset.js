/**
 * Note：给学员解释WeakSet的争议比较多
 * https://stackoverflow.com/questions/30556078/ecmascript-6-what-is-weakset-for
 * 个人理解：这里的设计完全是从Java里面的weakset抄过来的，其特性和API基本上和Java完全一致
 * 需要理解的核心特性:
 * 1. WeakSet里面只能存对象，不能存其它东西
 * 2. WeakSet里面的对象是弱引用，只要对象的引用为0，随时可能被垃圾收集器收集
 * 3. 所以，WeakSet是不可枚举的，它只有add()/delete()/has()3个方法
 * 4. WeakSet典型的应用场景是用来缓存DOM节点的引用
 */
//1. WeakSet里面只能存对象，不能存其它东西
// const ws1=new WeakSet(1);
// console.log(ws1);

//2. WeakSet里面的对象是弱引用，只要对象的引用为0，随时可能被垃圾收集器收集
const ws2=new WeakSet();
ws2.add({});
ws2.add([]);
// setInterval(()=>{
//     console.log(ws2);
// },1000);

//3. 所以，WeakSet是不可枚举的，它只有add()/delete()/has()3个方法
let ws3=new WeakSet();
let user={name:'damoqiongqiu'};
ws3.add(user);
console.log(ws3.has(user));
ws3.delete(user);
console.log(ws3.has(user));