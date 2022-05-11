//filter() 方法创建一个新数组,其包含通过所提供函数实现的测试的所有元素
function filter(arr,filterCallback){
  if(!Array.isArray(arr)||!arr.length||typeof filterCallback !=='function'){
    return [];
  }else{
    let result = [];
    //每次调用此函数时 我们都会创建一个result数组
    //因为我们不想改变原始数组
    for(let i=0,len = arr.length;i<len;i++){
      //检查filterCallback 的返回值是否是真值
      if(filterCallback(arr[i],i,arr)){
        result.push(arr[i]);
      }
    }
    return result;
  }
}