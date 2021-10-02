/**
 * Created by dell on 2016/12/15.
 */
define(function(){
    //住房公积金计算方式
    var result = function(salary){
        return salary * 0.2;
    }
    return{
        result:result
    }
});