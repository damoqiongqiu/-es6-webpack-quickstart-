/**
 * 必须熟练掌握的知识点有3个
 * 1. 对比ES5里面的变量定义方式
 * 2. ES6新增的let关键字
 * 3. ES6新增的const关键字
 * 4. 恶心人的TDZ（Temporal dead zone）：与Java做个对比
 */

/**
 * 1.对比ES5里面的变量定义方式
 */
//ES5最基本的变量定义方式
var userName = "damo";
console.log(userName);

//ES5只有全局作用域、函数作用域，但是没有块级（语句块）作用域，导致了大量诡异的行为
//那么什么是语句块呢？简单说就是花括号里面的内容
//常见的语句块有：函数、if块、for/while块等等
//ES5只认function这个块，其它语句块里面定义的变量都会【泄漏】到外面去
{
    var age = 18;
}
console.log(age);

/**
 * 2. ES6新增的let关键字
 * - 不再支持变量提升，也就是说必须先声明再使用
 * - 同一个作用域内不允许重复的变量名
 * - 可以在语句块中声明函数，在实际开发中不要使用这种方式，因为这种方式会让代码变得很难理解
 * - 建议：在实际开发过程中全部使用let声明变量，可以在eslint的规则里面进行配置
 */
// let userName = 'xiaofei-zhang';//报错，因为前面已经用var声明了同名变量
// console.log(userName);

{
    function test() {
        console.log("语句块内部可以声明函数");
    }
    test();
}

/**
 * 3. ES6新增的const关键字，语法特性与其它编程语言很类似
 * - 声明时必须立即赋值
 * - 声明之后不可再修改
 * - 遵守块级作用域规则
 */
const addr = "北京市朝阳区东四环1号朝阳公园";
// addr = "..."; //这里会报错，因为常量不允许修改

//const的不可修改指的是引用不可修改（本质是内存中的指针），而不是所引用对象的key不可修改
// const user = { name: 'damo', age: 18 };
// console.log(user);
// user.name = 'xiaofei';
// console.log(user);

// {
//     const myConst = 1;
// }
// console.log(myConst);

//4. 恶心人的TDZ（Temporal dead zone）：与Java做个对比
let sum = 0;
if (1) {
    console.log(`外层的sum>${sum}`); //这里会很恶心
    let sum = sum + 1000;
}
//Java里面就没有这个问题，这明显是个设计缺陷，却被当成了feature
