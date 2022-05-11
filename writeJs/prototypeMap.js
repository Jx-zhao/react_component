// map()方法创建一个新数组,其结果是该数组中的每个元素都调用一个提供的函数后返回的结果
function map(arr,mapCallback){
  //首先,检查传递的参数是否正确.
  if(!Array.isArray(arr)||!arr.length||typeof mapCallBack !== 'function')
    return [];
  else{
    let result = [];
    //每次调用词函数时,我们都会创建一个result数组
    //因为我们不想改变原始数组,
    for(let i = 0,len = arr.length;i<len;i++){
      result.push(mapCallback(arr[i],i,arr));
    }
    return result;
  }
}