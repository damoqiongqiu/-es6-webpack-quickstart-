/**
 * 需要熟练掌握以下知识点：
 * 
 * 1. Symbol这个原始类型最初的设计动机是用来模拟private属性，后来走歪掉了，关于Symbol特性的争议比较多
 * 2. 基本用法，工厂函数Symbol()
 * 3. Symbol实例的唯一性，相同的构造参数获得的实例也不相等
 * 4. Symbol.for()可以获得相同的实例
 * 5. 作为对象的key
 * 6. 用Symbol模拟私有属性，不能被for...of和for...in循环遍历
 * 7. 神坑：Symbol对象没有toString方法。
 * 8. ES6内置的Symbol
 */
//1. Symbol这个原始类型最初的设计动机是用来模拟private属性，后来走歪掉了，关于Symbol特性的争议比较多
//https://stackoverflow.com/questions/21724326/what-is-the-motivation-for-bringing-symbols-to-es6

//2. 基本用法，工厂函数Symbol()
let s1 = Symbol();
console.log(s1);
let s2 = Symbol("foo");
console.log(s2);
let num1 = Number(1);
console.log(num1);
let num2 = 1;

//3. Symbol实例的唯一性，相同的构造参数获得的实例也不相等
let s3 = Symbol();
let s4 = Symbol();
console.log(s3 == s4);
console.log(Symbol("foo") == Symbol("foo"));
//NaN==NaN
// console.log(NaN==NaN);
//UUID() 长串

//4. Symbol.for()可以获得相同的实例
console.log(Symbol.for("foo") == Symbol.for("foo"));
//单例

//5. Symbol作为对象的key
let idSym = Symbol("id");
let user = {
    name: "damoqiongqiu",
    age: 18
};
user[idSym] = "123456789";
//user.idSym=""//not OK

//6. 用Symbol模拟私有属性，不能被for...of和for...in循环遍历
console.log("for...in");
for (let p in user) {
    console.log(p + "-->" + user[p]);
}

//7. 超级神坑：Symbol对象不能自动转成字符串
let s5 = Symbol();
console.log(`模板字符串${s5.toString()}`); //行为不一致巨坑

//8 .介绍ES6内置的13个Symbol
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#Well-known_symbols
