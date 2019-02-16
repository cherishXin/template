window.webSetting = {
  // 设计稿屏幕宽度
  designWidth: 1920,
  limitWidth: 1440
};

function initFontSize() {
  var baseWidth = document.documentElement.clientWidth >= window.webSetting.limitWidth ? document.documentElement.clientWidth : window.webSetting.limitWidth;
  document.documentElement.style.fontSize = (baseWidth / (window.webSetting.designWidth / 100)) + "px";
}

initFontSize();
window.addEventListener("resize", initFontSize);
