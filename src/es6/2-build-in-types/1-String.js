/**
 * ES6为String扩展了一些非常好用的新特性，需要熟练掌握的特性有3点
 * 1. 模板字符串
 * 2. 一些好用的工具函数
 * 全量特性：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 */
//1. 模板字符串
let user = {
    name: "大漠穷秋",
    age: 18,
    sayHello: function () {
        return this.name;
    }
};
let str2 = "用户名：" + user.name + ",年龄:" + user.age;
console.log(str2);

//超级好用的特性，可以换行，还可以执行方法
let str3 = `用户名：${user.name},年龄：${user.age}，打招呼：${user.sayHello()}`;
console.log(str3);

document.body.innerHTML = `
    <div>这里可以换行真是太爽了！${user.name}</div>
    <div>这里可以换行真是太爽了！${user.name}</div>
    <div>这里可以换行真是太爽了！${user.name}</div>
    <div>这里可以换行真是太爽了！${user.name}</div>
    <div>这里可以换行真是太爽了！${user.name}</div>
`;

//2. 一些好用的工具函数：includes(), startsWith(), endsWith(),repeat(),padStart(),padEnd(),matchAll()
console.log(str.includes("Hello"));
console.log(str.startsWith("Hello"));
console.log(str.endsWith("Hello"));
console.log(str.repeat(3));
console.log(str.padStart(10, "test"));
console.log(str.padEnd(10, "test"));

let str="Hello";
let regExp=/^Hello/g;
console.log(...str.matchAll(regExp));

