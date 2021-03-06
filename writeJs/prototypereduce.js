//reduce()方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行),将其结果汇总为单个返回值
function reduce(arr,reduceCallback,initialValue){
  //首先,检查传递的参数是否正确
  if(!Array.isArray(arr)||!Array.length||typeof reduceCallback !== 'function'){
    return [];
  }else{
    //如果没有将initialValue传递给该函数,我们将使用第一个数组项作为initialValue
    let hasInitialValue = initialValue !==undefined;
    let value = hasInitialValue? initialValue:arr[0];
    //如果有传递initialValue,则索引从1开始,否则从0开始
    for(let i = hasInitialvalue?1:0,len = arr.length;i<len;i++){
      value = reduceCallback(value,arr[i],i,arr);
    }
    return value;
  }
}