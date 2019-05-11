/**
 * Iterator迭代器接口是一个重要的更新，它让遍历操作统一到了一个接口之下，理解起来更顺畅
 * Note：这里给学员类比一下Java里面的迭代器设计，先讲Java，再讲ES6
 * 目前实现了Iterator接口的内置类如下（共8个）：
 * - Array
 * - Set
 * - Map
 * - String
 * - TypedArray
 * - 函数的 arguments 对象
 * - NodeList 对象
 * - ES9里面的Object也实现了Iterator接口
 */

/**
 * 典型场景1：显式调用迭代器
 * Note：相对于Java里面的优雅方式，这是一个非常糟糕的语法，不适合人类理解和记忆
 * Note：这里对比Java里面的Iterator接口
 */
let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();
iter.next();
iter.next();
iter.next();
iter.next();

/**
 * 典型场景2：隐含调用Iterator
 */
//for...of循环，只要实现了Iterator接口，就可以使用这种语法
for (let item of arr) {
    console.log(item);
}

//解构赋值、spread操作符、rest操作符都会隐含调用Iterator
let [a, b, c] = [1, 2, 3];
console.log(a);
console.log(b);
console.log(c);



