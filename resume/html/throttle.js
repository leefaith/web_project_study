// function throttle(func, wait) {
//   let context, agrs;
//   //之前时间戳
//   let old = 0;
//   return function () {
//     context = this;
//     args = arguments;
//     //当前时间戳
//     let now = new Date().valueOf();
//     if (now - old > wait) {
//       //立即执行
//       func.apply(context, args);
//       old = now;
//     }
//   };
// }

//顾尾不顾头
// function throttle(func, wait) {
//   let context, args, timeout;
//   return function () {
//     context = this;
//     args = arguments;

//     if (!timeout) {
//       timeout = setTimeout(function () {
//         timeout = null;
//         func.apply(context, args);
//       }, wait);
//     }
//   };
// }

//有头有尾
function throttle(func, wait) {
  let context, args, timeout;
  let old=0;//时间戳
  return function () {
    context = this;
    args = arguments;

    let now=new Date().valueOf();
    if (!timeout) {
      timeout = setTimeout(function () {
        timeout = null;
        func.apply(context, args);
      }, wait);
    }
  };
}