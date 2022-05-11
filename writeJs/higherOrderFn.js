//高阶函数 就是将函数作为参数或返回值的函数
function higherOrderFunction(param,callback){
  return callback(param);
}