/**
 * ES6对Object做了大幅度的修改，需要熟练掌握的特性：
 * 1. 新增对象构造方式
 * 2. 新增super关键字
 * 3. 解构赋值
 * 4. 一些好用的工具方法
 */

//1. 新增对象构造方式
const name = "大漠穷秋";
const age = 18;

const user = {
    name,
    age,
    hello() {
        console.log("用户名：", this.name);
    }
};
console.log(user);
user.hello();

//2. 新增super关键字
const animal = {
    name: "animal"
};
const person = {
    name: "person",
    sayHello() {
        console.log(super.name);
        console.log(this.name);
        return this.name;
    }
};
Object.setPrototypeOf(person, animal);
person.sayHello();

//3. 解构赋值
let { userName, userAge } = { userName: "大漠穷秋", userAge: 18 };
console.log(userName);
console.log(userAge);

/**
 * 4. 一些好用的工具方法
 *  Object.is()
 *  Object.assign()
 *  Object.create()
 *  Object.getOwnPropertyDescriptors()
 *  Object.keys()/values()/entries()/fromEntries()
 *  Note:MDN上的完整属性
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 */
//Object.is()判断两个对象是否相等
console.log(Object.is("test", "test"));
let obj1 = { addr: "北京市朝阳区东四环北路1号朝阳公园" };
let obj2 = { addr: "北京市朝阳区东四环北路1号朝阳公园" };
console.log(Object.is(obj1, obj2));
//NaN
//NaN==NaN false
console.log(Object.is(NaN, 0 / 0)); //true

//用assign方法进行对象合并
let basicInfo = { name: "damoqiongqiu", password: "123456", age: 18 };
let accountInfo = { balance: 100000000, spent: 100000 };
let allInfo = Object.assign({}, basicInfo, accountInfo);
console.log(allInfo);

//特别注意：assign的浅拷贝特性
//特别注意：不可枚举的属性不会拷贝，Symbol定义的属性不会拷贝
//问题：如果要做深拷贝怎么办？

//Object.create()实现原型继承

//Object.getOwnPropertyDescriptors()，对象描述符
let obj3 = {
    name: "damoqiongqiu",
    age: 18
};
console.log(Object.getOwnPropertyDescriptors(obj3));

//keys()/values()/entries()
const user2 = {
    name: "大漠穷秋",
    age: 18
};
console.log(Object.keys(user2)); //keys()在ES5里面就有
console.log(Object.values(user2)); //values()在ES8里面引入
console.log(Object.entries(user2)); //entries()在ES8里面引入
