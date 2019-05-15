/**
 * ES6给函数扩展了很多特性，需要熟练掌握的有2个：
 * 1. 可变长参数
 * 2. 箭头函数
 */
/**
 * 1. 可变长参数
 */
//求和工具函数的传统实现

//利用rest操作符实现可变长求和工具函数
function sum(...args) {
    let result = 0;
    for (let i of args) {
        result += i;
    }
    return result;
}
let result = sum(1, 2, 3, 4, 5);
console.log(result);

/**
 * 2. 箭头函数
 */

//老的写法
let arr = [1, 2, 3];
arr.map(function(x) {
    return x * x;
});

//箭头函数更加简洁
arr.map(x => x * x);
console.log(arr);

//setTimeout老的写法
setTimeout(function() {
    console.log(this);
}, 1000);
//箭头函数的写法
setTimeout(() => {
    console.log(this);
}, 1000);

//以下写法是不对的，因为箭头函数是静态作用域，sayHello里面的this是undefined
let user = {
    name: "大漠穷秋",
    age: 18,
    sayHello: () => {
        console.log(this.name);
    }
};
user.sayHello();
