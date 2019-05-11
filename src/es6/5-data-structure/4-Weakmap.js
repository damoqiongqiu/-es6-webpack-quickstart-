/**
 * 1. WeakMap的key所引用的value不加入GC的计数器，并且随时会消失
 * 2. WeakMap只接受对象作为键名（Symbol和null都不能作为key），不接受其他类型的值作为键名。
 * 3. WeakMap只有get/set/has/delete这4个API，不能遍历
 * 个人理解：这里的设计完全是从Java里面的WeakMap抄过来的，其特性和API基本上和Java完全一致
 */
let wm=new WeakMap();
wm.set({},2);
wm.set(Symbol(),3);
console.log(wm);
