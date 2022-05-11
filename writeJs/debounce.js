
// 函数防抖的实现
/**
 * 防抖函数
 * @param {*} cb     回调函数
 * @param {*} delay  时间间隔
 * @returns 
 */
const debounce = (cb,delay = 1000) =>{
  let timeout;
  return (...ages) =>{
    clearTimeout(timeout);
    timeout = setTimeout(()=>{
      cb(...ages);
    },delay)
  }
}
const throttle = (cb,delay = 1000)=>{
  let isWaiting = false;
  let lastAges
  const timeOutFn = ()=>{
    if(lastAges){
      cb(...lastAges);
      lastAges = null;
      setTimeout(timeOutFn,delay);
    }else{
      isWaiting = false;
    }
  }
  return (...ages) =>{
    if(isWaiting){
      lastAges = ages
      return;
    } 
    cb(...ages);
    isWaiting = true;
    setTimeout(timeOutFn,delay)
  }
}