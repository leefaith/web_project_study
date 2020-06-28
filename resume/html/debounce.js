function debounce(func, wait, immediate) {
  let timeout, result;
  let debounced = function () {
    //改变函数内部this的指向
    let context = this;
    //改变event指向问题
    let args = arguments;

    if (timeout) clearTimeout(timeout);
    //判断是否立即执行
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait);
      //立即执行
      if (callNow) func.apply(context, args);
    } else {
      //不立即执行
      timeout = setTimeout(function () {
        func.apply(context, args);
      }, wait);
    }
    return result;
  };
  debounce.cancel = function () {
    clearTimeout(timeout);
    timeout = null; //防止内包泄露
  };
  return debounced;
}

let count = 0;
let container = document.querySelector("#container");
function doSomeThing() {
  console.log(this);

  container.innerHTML = count++;
}
//高阶函数 防抖
container.onmousemove = debounce(doSomeThing, 1000, true);
