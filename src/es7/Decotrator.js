/**
 * Decorator装饰器是一个非常有用的方法，但是它目前还不是正式标准。
 * TypeScript里面的Decorator也是实验状态。
 * 很多前端框架里面都使用了Decorator特性，用得最多的是Angular。
 * TC39最新的一次会议还是没有确定，https://github.com/tc39/proposal-decorators
 *
 * 1. 讲解Java中的Annotation
 * 2. 讲解Angular中的@Component装饰器
 * 3. 自己实现@Component装饰器
 * Note:如果你打算实现自己的前端框架，以上是必备的内容，因为目前主流的前端框架都采用了这种设计
 */
//1. 讲解Java中的Annotation

//2. 讲解Angular中的@Component装饰器

//3. 自己实现@Component装饰器
function Component(config) {
    return function(target) {
        //target是需要被装饰的class的prototype
        target.prototype.cid = "cid-" + Math.ceil(Math.random() * 100000000);
        target.prototype.onInit = function() {
            console.log("默认的初始化方法，神马都不做...");
            return "";
        };
        Object.assign(target.prototype, config);
    };
}

function readonly(target, name, descriptor) {
    descriptor.writable = false;
    return descriptor;
}

@Component({
    selector: "user-list",
    templateURL: "./user-list.html",
    styleURLs: ["./user-list.css"]
})
class UserListComponent {
    @readonly
    getPages() {
        return 10;
    }
}

let userListComponent = new UserListComponent();
console.log(userListComponent);
