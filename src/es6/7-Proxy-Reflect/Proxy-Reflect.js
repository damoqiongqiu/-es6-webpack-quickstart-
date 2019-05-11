/**
 * 在很多语言里面都有所谓的反射机制，比如Python/C#/Java
 * 但是从整体的设计思路上看，ES6里面引入的Reflect-Proxy这套机制还是跟Java长得最像，虽然实现细节方面有很大的差异。
 * 1. Java里面反射和动态代理的例子
 * 2. ES6里面代理和反射的例子
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
 */
//1. Java里面反射和动态代理的例子

//2. ES6里面代理和反射的例子
//复习：ES6里面的getter/setter是最重要的2个方法
let role = {
    _name: "管理员",
    get name() {
        console.log("get name ...");
        return this._name;
    },
    set name(name) {
        console.log("set name ...");
        this._name = name;
    }
};
console.log(role.name);
role.name = "角色名称...";
console.log(role.name);

//只要代理getter/setter就相当于重载了点操作符
//从而拦截所有对属性和方法的操作
//所以ES6这里就非常灵活了，不像Java里面那么麻烦
let user = {
    name: "damoqiongqiu",
    age: 18,
    sayHello: function() {
        console.log("你好！");
        let set = new Set();
        for (let i = 0; i < 100000; i++) {
            set.add(i);
        }
        return "";
    },
    eat: function() {
        console.log("eat...");
        return "";
    }
    //这里可以写更多内容，全部能拦截到...能体会到这里的强大不？
};
let userProxy = new Proxy(user, {
    get: function(target, prop, receiver) {
        console.log(`代理拦截：${prop}`);
        if (!(prop in target)) {
            throw new Error(`对象上不存在指定的属性：${prop}`);
        }
        let targetValue = Reflect.get(...arguments);
        //请注意，ES6里面的Proxy没有提供内置的工具来拦截方法调用，所以这里我们要自己处理一下
        if (typeof targetValue === "function") {
            console.log(`函数调用：${prop}`);
            return function(...args) {
                let start = new Date().getMilliseconds();
                let result = targetValue.apply(target, args);
                let end = new Date().getMilliseconds();
                console.log(`${prop}()调用花费时间>${end - start}秒`);
                return result;
            };
        }
        return targetValue;
    }
});
// console.log(userProxy.addr);
// console.log(userProxy.name);
console.log(userProxy.sayHello());
console.log(userProxy.eat());
