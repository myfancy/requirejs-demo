/**
 * Created by dell on 2016/12/15.
 */
require.config({
    baseUrl:"./jixiao",
    paths: {
        "performanceCoefficient": "performanceCoefficient",
        "companyReserve": "companyReserve",
        "incomeTax": "incomeTax",
        "jquery":"../node_modules/jquery/dist/jquery.min.js"
    },
    //如果用到没有采用AMD标准写的库，需要先使用shim来定义特征（即exports值和依赖deps）。
    shim:{
        'jquery':{
            exports: '&'
        },
        'underscore':{
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'jquery.scroll': {//jQuery插件的话需要这么定义
            deps: ['jquery'],
            exports: 'jQuery.fn.scroll'
        }
    }
});
/**
 * performanceCoefficient : 个人绩效
 * companyReserve ：住房公积金
 * incomeTax ： 个人所得税
 */
require(['performanceCoefficient','companyReserve','incomeTax'],function(pf,cr,it){
    //基本工资
    var salary = 10000;

    //最终工资
    var mySalary = salary+salary*pf.result();
    mySalary = mySalary - cr.result(salary)-it.result(mySalary-cr.result(mySalary));
    console.log("计算得到的薪资为"+mySalary);
    //document.write(mySalary);
});



