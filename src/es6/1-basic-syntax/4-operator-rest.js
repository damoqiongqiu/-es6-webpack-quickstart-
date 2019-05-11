/**
 * 需要熟练掌握2种实战中的用法：
 * 1. 可变长参数
 * 2. 解构赋值
 * 注意：
 * rest和spread运算符的外观一模一样，都是3个点。
 * rest的中文含义是“剩余的”、“其余的”。
 * rest可以看成spread的反向操作，spread可以把数组“展开”，而rest可以把零散的元素“整合”成数组
 * rest操作符可以用来实现可变长参数，在Java里面有类似的实现，语法规则也类似，可变长参数必须是最后一个参数
 * 可变长参数会被自动转换成一个标准的JS数组
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
 */
/**
 * 1. 可变长参数，必须是最后一个参数
 */
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
 * 2. 解构赋值
 */
let [a, ...b] = [1, 2, 3, 4];
console.log(b);
