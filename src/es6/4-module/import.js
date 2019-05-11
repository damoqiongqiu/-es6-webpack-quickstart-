/**
 * 问题：模块化机制的最大意义在哪里？
 * 答案：便于把一个大型系统拆分成很多很小的模块来实现。
 * 【这里需要演示PPT，解释为什么大规模的项目必须要有模块系统】
 */
/**
 * import必须掌握的核心特性有3个：
 * 1. import进来的变量全部是只读的，但是import进来的对象属性可以修改
 * 2. import会被自动提升到顶部执行
 * 3. 多次import同一个模块只会执行一次
 * 4. import语句内部不能使用表达式
 * 5. import * 可以整体导入
 * 
 * 特别注意：import和export还有一些非常酷炫的花式玩法，比如export和import连写等等，
 * 有兴趣请自行研究，这些特性一般在编写框架的时候用的比较多，日常的业务开发者很少用到。
 */
import { userName, password, age,addr,obj } from "./1-export";
import { Animal } from "./1-export";
import { sayHello } from "./1-export";
import var1 from "./2-export-default";

//1. import进来的变量全部是只读的，但是import进来的对象属性可以修改
console.log(userName);
console.log(password);
console.log(age);
console.log(addr);
console.log(obj);
sayHello();
console.log(Animal);
let animal=new Animal("猴子");
animal.eat()

console.log(var1);

//2. import会被自动提升到顶部执行

//3. 多次import同一个模块只会执行一次

//4. import静态执行，所以不能配合变量和表达式使用
//以下代码是错误的
// let age=18;
// if(age<=18){
//     import {module1} from "???";
// }else{
//     import {module2} from "???";
// }
//如果想实现以上动态import，可以等待这个提案https://github.com/tc39/proposal-dynamic-import

//以下代码也是错误的
// let moduleName="user";
// import {User} from moduleName;

//5. import * 可以整体导入（但是请注意，ES6里面的import*与Java相比设计得太糟糕了）