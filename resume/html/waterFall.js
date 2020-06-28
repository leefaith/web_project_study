$(window).on("load", function () {
  waterFall();
});
function waterFall() {
  //1.求出列数
  var box = $(".box");
  var boxWidth = box.boxWidth(); //当前图片宽度
  var screenWidth = $(window).width(); //整个屏幕宽度
  //2.求出列数
  var cols = parseInt(screenWidth / boxWidth);
  //3.创建数组
  var heightArr = [];

  //4.图片遍历循环，除第一排不需要定位，取高度值最小值添加到数组

  $.each(box, function (index, ite) {
    //4.1取出图片高度
    var boxHeight = $(item).height();
    //4.2判断是不是第一排
    if (index < cols) {
      boxHeight[index] = boxHeight;
    } else {
      //4.3最小图片高度
      var minBoxHeight = Math.min(...heightArr);
      //4.4最小的索引
      var minBoxIndex = $.inArray(minBoxHeight, heightArr);
      $(item).css({
        position: "absolute",
        left: minBoxIndex * boxWidth + "px",
        top: minBoxHeight + "px",
      });
      //4.5高度追加
      heightArr[minBoxHeight] += boxHeight;
    }
  });
}
