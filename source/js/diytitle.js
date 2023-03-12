//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    //离开当前页面时标签显示内容
    document.title = "欲买桂花同载酒，荒泷天下第一斗 ||  " + OriginTitile;
    clearTimeout(titleTime);
  } else {
    //返回当前页面时标签显示内容
    document.title = "一个人有多热心，他就会感到有多寒冷  ||  " + OriginTitile;
    //两秒后变回正常标题
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 4000);
  }
});
