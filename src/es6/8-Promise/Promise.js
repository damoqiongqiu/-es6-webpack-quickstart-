/**
 * Promise这个特性完全是从第三方开源库里面吸收进来的一个特性，它最大的好处在于：解决了回调地狱的问题
 * Promise这里需要熟练掌握6个知识点：
 * 1. 理解回调地狱
 * 2. Promise的基本用法
 * 3. 经典场景：封装Ajax操作
 * 4. catch()捕捉异常
 * 5. Promise.all()
 * 6. Promise.race()
 */
//1. 理解回调地狱

//2. Promise的基本用法
//promise承诺，兑现，拒绝，异常
let promise=new Promise(function(resolve,reject){
    setTimeout(()=>{resolve(1)},1000);
});
promise.then((value)=>{
    console.log(value);
},(error)=>{});

//3. 经典场景：封装Ajax操作
function getData(url){
    let promise=new Promise(function(resolve,reject){
        let xhr=new XMLHttpRequest();
        xhr.open("GET",url);
        xhr.responseType="json";
        xhr.setRequestHeader("Accept","application/json");
        xhr.onreadystatechange=function(){
            if(this.readyState!==4){
                return;
            }
            if(this.status==200){
                resolve(this.response);
            }else{
                reject(new Error(this.statusText));
            }
        }
        xhr.send();
    });
    return promise;
}

// getData("http://localhost:3000/api/user")
// .then(function(data){
//     console.log(data);
// });

//4. catch()捕捉异常
// getData("http://localhost:3000/api/user")
// .then(function(data){
//     console.log(data);
// })
// .catch(function(error){
//     console.log(error);
// });

//5. Promise.all()
let promise1=new Promise(function(resolve,reject){
    setTimeout(reject,1000,1);
});
let promise2=new Promise(function(resolve,reject){
    setTimeout(reject,2000,2);
});
let promise3=new Promise(function(resolve,reject){
    setTimeout(resolve,3000,3);
});
//1&&2&&3
// Promise.all([promise1,promise2,promise3])
// .then(function(value){
//     console.log(value);
//     //业务逻辑...
// });

//6. Promise.race()，赛跑模式，整体状态为第一个Promise的返回值，如果第一个返回的Promise为resolve，则整体为resolve，如果第一个返回的为reject，则整体为reject
Promise.race([promise1,promise2,promise3])
.then(function(value){
    console.log(value);
    //业务逻辑...
})
.catch(function(error){
    console.log(error);
});

/**
 * Note：Promise依然有很多不优雅的地方：
 * 1. 无法中途撤回；
 * 2. 无法触发多个值；
 * 3. then还是会造成嵌套
 * 如果你有兴趣，推荐去看看RxJS，http://reactivex.io/
 */