/**
 * Note：介绍lodash：https://www.lodashjs.com/docs/4.17.5.html
 * Note：lodash安装配置方式：https://www.npmjs.com/package/lodash-webpack-plugin
 */
import lodash from 'lodash';

let arr1=[1,2,3];
let arr2=[3,4,5];
let arr3=lodash.union(arr1,arr2);
// console.log(arr3);

console.log(lodash.union([...new Set([1,2,3])],[...new Set([3,4,5])]));


//Note：介绍lodash的其它关键API
