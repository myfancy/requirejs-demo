/**
 * Created by dell on 2016/12/15.
 */
define(function(require, exports, module){
    //个人所得税
    var result = function(salary){
        return salary * 0.2;
    }
    return {
        result:result
    }
});