//浅拷贝,精准拷贝原始对象的属性值,如果属性是基本类型,会拷贝基本属性的值,如果属性时引用类型,会拷贝该属性的内存地址(如果其中一个对象改变了该属性内的值,会影响到另外一个对象)
//实现方法
// Object.assign方法  常用的方法 es6的扩展运算符 ...

// let a = {
//   name: 'Jake',
//   flag: {
//     title: 'better day by day',
//     time: '2022-05-10',
//   },
// }
// let b = { ...a }
// console.log(b)

//深拷贝: 将一个对象从内存中完整的拷贝一份出来 从堆内存中开辟一个新的区域存放新对象,且修改新对象不会影响原对象.
//乞丐版:JSON.parse(JSON.stringify(object)),缺点多, 会忽略undefined/symbol/函数; 不能解决循环引用;不能处理正则/new Date()

//基础般:浅拷贝+递归(只考虑了普通的object和array两种数据类型)
// function cloneDeep(target,map = newWeakMap()){
//   if(typeof target === 'object'){
//     let cloneTarget = Array.isArray(target)?[]:{};
//     if(map.get(target)){
//       return target;
//     }
//     map.set(target,cloneTarget);
//     for(const key in target){
//       cloneTarget[key] = cloneDeep(target[key],map);
//     }
//     return cloneTarget
//   }else{
//     return target;
//   }
// }
const arr = [
  { id: 1, name: '小红' },
  { id: 3, name: '小白' },
  { id: 2, name: '小黑' },
]
console.log(arr.sort((a,b)=>a.id-b.id));