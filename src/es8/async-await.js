/**
 * 1. 详解getData()案例
 * 2. async-await的本质是Generator的语法糖，它在语义上更加明确，写出来的异步调用代码非常简洁，建议大家使用async/await，而不是Generator函数
 * 3. 推荐大家看看Koa框架https://github.com/koajs/koa
 */

//用setTimeout模拟异步操作，返回一个Promise
function getData(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x * 2);
        }, 2000);
    });
}

//单次调用异步操作，很平淡，处理一下Promise即可
getData(10).then(result => {
    console.log(result);
});

//如果需要多次调用这个异步的getData，而且需要保证执行的顺序，代码瞬间就会变得非常丑陋，回调地狱就出现了
function asyncSum() {
    return new Promise(resolve => {
        getData(10).then(a => {
            getData(20).then(b => {
                getData(30).then(c => {
                    resolve(a + b + c);
                });
            });
        });
    });
}
asyncSum().then(result => {
    console.log(result);
});

//用async+await简化之后的代码，干净又整洁，6秒钟之后，获得结果
async function sumAsync2() {
    const a = await getData(10); //await 表达式会【阻塞】在这里等待异步调用的结果，代码从外观上看就像同步调用一样
    const b = await getData(20);
    const c = await getData(30);
    return a + b + c;
}

sumAsync2().then(sum => {
    console.log(sum);
});

//如果需要3个异步请求并行处理，可以这么做
async function sumAsync3() {
    const a = getData(10); //await 表达式会等待异步调用的结果
    const b = getData(20);
    const c = getData(30);
    return (await a) + (await b) + (await c); //同一行里面的await命令会并行处理
}

sumAsync3().then(sum => {
    console.log(sum);
});

//Note：由于async/await用起来实在太爽了，著名的Koa框架已经全部使用async/await进行了重写
//如果你对这个特性感兴趣，推荐玩玩Koa框架https://github.com/koajs/koa
