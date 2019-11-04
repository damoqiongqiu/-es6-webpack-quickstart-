/**
 * 注意：这一节比较难，可能需要反复观看和练习才能深入掌握。
 * Generator看起来像一个普通的函数，但是它的行为很像Iterator（迭代器）。
 * 因为Generator的语法写起来非常恶心（shitty），所以在ES8里面又提供了async/await写法
 * 还记得我们前面讲过ECMA是一个什么样的组织吧？
 * 这是ECMA不靠谱的又一个例证。
 *
 * 需要熟练掌握的知识点共8个：
 * 1. 回顾一下ES6里面手动获得Iterator的例子，后面需要对比
 * 2. Generator基本用法
 * 3. 既然调用next()的时候才会继续执行下一步，那么就可以构造一个永不结束的Generator
 * 4. 既然Generator可以返回Iterator迭代器，那么我们就可以利用这个特性来实现迭代器功能
 * 5. for...of会在内部隐含使用迭代器Iterator，所以可以直接用for...of来遍历Generator
 * 6. Generator函数能互相调用吗？-->能，使用yield*语法
 * 7. yield*一个Iterable对象会怎么样？ES6里面Array/Set/Map/String/arguments等都是可遍历的
 * 8. 用yield封装Promise
 *
 * 从易到难依次递进，请不要跳跃
 */
//1. 回顾一下ES6里面手动获得Iterator的例子，后面需要对比
let arr = [];
for (let i = 0; i < 100; i++) {
    arr.push(i);
}
let iterator = arr[Symbol.iterator]();
let result = iterator.next();
while (!result.done) {
    console.log(result);
    result = iterator.next();
}

//2. Generator 基本用法
function* testGenerator() {
    yield "大漠"; //这里的含义是：返回一个字符串"大漠"出去，然后【让出】函数的执行权，等待下一次next()调用
    yield "穷秋";
    yield "塞草飞";
}

var iter = testGenerator(); //执行Generator函数，返回的是一个Iterator迭代器
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
//这里的yield的含义是【让出】，与Java多线程编程中的yield()方法含义是一样的

//SEQ，前端自增ID
//3. 既然调用next()的时候才会继续执行下一步，那么就可以构造一个永不结束的Generator
function* naturalNumbers() {
    let num = 1;
    while (true) {
        //死循环，这个Generator永远不结束，可以一直next()下去
        yield num;
        num = num + 1;
    }
}
const numbers = naturalNumbers();
console.log(numbers.next().value);
console.log(numbers.next().value);

//4. 既然Generator可以返回Iterator迭代器，那么我们就可以利用这个特性来实现迭代器功能
//在ES9之前，普通的JS对象是不可迭代的，它们没有实现Iterable接口
let user = {
    name: "damoqiongqiu",
    age: 18,
    addr: "北京市朝阳区东四环1号朝阳公园"
};
console.log(...user);
user[Symbol.iterator] = function*() {
    for (let p in user) {
        yield user[p];
    }
};
console.log(...user);

//所有对象全部可以...

//5. for...of会在内部隐含使用迭代器Iterator，所以可以直接用for...of来遍历Generator
function* foo() {
    for (let i = 0; i < 10; i++) {
        yield i;
    }
}
for (let key of foo()) {
    console.log(key);
}

//6. Generator函数能互相调用吗？-->能，使用yield*语法
function* g1() {
    yield 1;
    yield 2;
    yield 3;
}

function* g2() {
    yield* g1(); //能理解这里yield的含义了吧？g2把执行权让给了g1
    yield 4;
    yield 5;
    yield 6;
}

let iter3 = g2();
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());

//7. yield*一个Iterable对象会怎么样？ES6里面Array/Set/Map/String/arguments等都是可遍历的
function* testYield() {
    yield* [1, 2, 3];
    yield* new Set([4, 5, 6]);
    yield* new Map([[1, "one"], [2, "two"]]);
    yield* "Hello World!";
}
let iter4 = testYield();
let result2 = iter4.next();
while (!result2.done) {
    console.log(result2.value);
    result2 = iter4.next();
}

//8. 用yield封装Promise
function getData(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x * 2);
        }, 1000);
    });
}

//我们的目标是：两次异步操作都成功之后，才去做我们的业务，而且这两次异步操作要按照顺序执行
function* myBz() {
    let p1 = yield getData(10);
    console.log(p1);
    let p2 = yield getData(20);
    console.log(p2);
}

let bzIter=myBz();
bzIter.next().value.then(function(result){
    bzIter.next().value.then(function(result){
        bzIter.next();
        //...
    });
});

//递归执行
function runner(generator) {
    let g = generator();
    function next(data) {
        let result = g.next(data);
        if (result.done) {
            return result.value;
        }
        result.value.then(function(data) {
            next(data); //这里开始递归
        });
    }
    next();
}

runner(myBz);

//ES8里面的终于有了async/await来避开这个恶心的写法了
async function myBz2() {
    const a = await getData(10); //await 表达式会阻塞在这里【等待】异步调用的结果，使得代码从外观上看就像同步调用一样
    console.log(a);
    const b = await getData(20);
    console.log(b);
}

//可以看到async函数返回的是一个Promise对象
myBz2().then(result => {});

//https://github.com/koajs/koa
