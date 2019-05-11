/**
 * export必须熟练掌握的特性有
 * 1. 可以导出变量，可以一个一个export，也可以整合到一起export
 * 2. 可以导出JSON对象
 * 3. 可以导出函数
 * 4. 可以导出类
 * 5. 导出的时候可以起别名
 * 6. 特别注意，export必须导出接口，而不是导出确定的值
 */

//1. 可以一个一个export，也可以整合到一起export
let userName = '大漠穷秋';
let password = '123456';
let age = 18;
export { userName, password, age };

//2. 可以导出JSON对象
let obj={name:"大漠穷秋",age:18};
export {obj};

//3. 可以导出函数
export function sayHello(){
    alert(userName);
}

//4. 可以导出类
export class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`动物吃东西>${this.name}`);
    }
    
    run() {
        console.log(`动物运动>${this.name}`);
    }

    //特别注意：ES6目前还不支持static属性，从语法一致性层面看，这是非常糟糕的
    static testStaticMethod() {
        console.log("Animal上的静态方法...");
    }

    toString() {
        return '(' + this.name + ', ' + this.age + ')';
    }
}

//5. 导出的时候可以起别名
let address="北京市朝阳区东四环北路1号";
export {address as addr};

//6. 特别注意，export必须导出接口，而不是导出确定的值
//以下export是不行的
// let a=1;
// export a;//这样相当于export 1，相当于导出固定的值，编译过不去
// export {a};//这样就可以了