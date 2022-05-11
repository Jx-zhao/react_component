


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
  return (...ages) =>{
    if(isWaiting) return;
    cb(...ages);
    isWaiting = true;
    setTimeout(()=>{
      isWaiting = false;
    },delay)
  }
}
const setDebouncetxt = debounce((txt)=>{
  
})