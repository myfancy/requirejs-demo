/**
 * Created by dell on 2016/12/15.
 */
//求得绩效系数
var performanceCoefficient = function(){
    return 0.2
}
//住房公积金计算方式
var companyReserve = function(salary){
    return salary * 0.2;
}
//个人所得税
var incomeTax = function(salary){
    return salary * 0.2;
}

//基本工资
var salary = 10000;

//最终工资
var mySalary = salary+salary*performanceCoefficient();
mySalary = mySalary - companyReserve(salary)-incomeTax(mySalary-companyReserve(mySalary));
console.log(mySalary);

//说明 当这个计算非常复杂的时候代码可能超过1000行。
//那么这个时候我们通常怎么做呢？
//我们通常将这个js文件分割成多个文件
//分别是 performanceCoefficient.js companyReserve.js incomeTax.js main.js
//这样做有一下好处：
//① 便于多人协作，一个人负责一块功能
//② 便于后期维护，将来在哪一个模块有变更需求的话，这样的结构使得模块很清晰，可以很方便的找到对应模块进行修改。而且修改的话只修改这个文件，肯定不会对其他代码造成误操作。
//但是这样做有一个很大的问题：
//就是代码需要按照依赖顺序添加到页面上.如下：
//<script src="companyReserve.js" type="text/javascript"></script>
//<script src="incomeTax.js" type="text/javascript"></script>
//<script src="performanceCoefficient.js" type="text/javascript"></script>
//<script src="main.js" type="text/javascript"></script>
//假设 上面三个js文件直接互相也有依赖关系，那么这会是页面上引用js变得很棘手，需要判断js的顺序。

//那么我们就需要requirejs来帮忙了