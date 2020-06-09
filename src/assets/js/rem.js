;(() => {
  function serRem(DrawingSize = 1920, baseSize = 100) {
    var wW = window.innerWidth
    // var htmlH = window.innerHeight;
    var rem

    function IsFullScreen() {
      if (window.screen.height === window.innerHeight) {
        // 全屏模式
        console.log('全屏模式')
        rem = (wW / DrawingSize) * baseSize
      } else {
        console.log('非全屏模式')
        // 倍率
        var times =
          parseInt(
            100 - ((window.screen.height - window.innerHeight) / window.screen.height) * 100
          ) / 100
        rem = (wW / DrawingSize) * baseSize * times
      }
    }
    if (wW < DrawingSize) {
      // 小于设计图标准
      if ((wW / DrawingSize).toFixed(1) <= 0.7) {
        // 最小兼容设备 0.7
        console.log('小于0.7')
        rem = baseSize * 0.7
      } else {
        console.log('大于0.7')
        IsFullScreen()
      }
    } else if (wW === DrawingSize) {
      // 符合设计图标准
      console.log('符合设计标准')
      IsFullScreen()
    } else {
      // 大于设计图标准
      console.log('大于设计标准')
      IsFullScreen()
    }
    $('html').style.fontSize = `${rem}px`
  }
  window.addEventListener(
    'resize',
    () => {
      // 窗口改变事件
      serRem(1920, 100)
    },
    false
  )
  window.$ = $

  function $(tagName = null) {
    return tagName ? document.querySelector(tagName) : null
  }
  serRem(1920, 100)
})()
